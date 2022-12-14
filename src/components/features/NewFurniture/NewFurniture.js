import React from 'react';
import PropTypes from 'prop-types';

import { RWD_MODES } from '../../../redux/initialState';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  getDisplayedProductsCount(rwdMode) {
    if (rwdMode === RWD_MODES.DESKTOP) {
      return 8;
    } else if (rwdMode === RWD_MODES.TABLET) {
      return 4;
    } else {
      return 1;
    }
  }

  getProducts(categoryProducts, activePage, rwdMode) {
    const displayedProductsCount = this.getDisplayedProductsCount(rwdMode);

    return (
      <>
        {categoryProducts
          .slice(
            activePage * displayedProductsCount,
            (activePage + 1) * displayedProductsCount
          )
          .map(item => (
            <div key={item.id} className='col-12 col-md-6 col-lg-3 '>
              <ProductBox {...item} />
            </div>
          ))}
      </>
    );
  }

  render() {
    const { categories, products, rwdMode } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onChange={() => this.handlePageChange(i)}
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable
            leftAction={
              activePage < pagesCount - 1
                ? () => this.handlePageChange(activePage + 1)
                : undefined
            }
            rightAction={
              activePage > 0 ? () => this.handlePageChange(activePage - 1) : undefined
            }
          >
            <div className='row'>
              {this.getProducts(categoryProducts, activePage, rwdMode)}
            </div>
          </Swipeable>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      priceOld: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  rwdMode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  rwdMode: RWD_MODES.DESKTOP,
};

export default NewFurniture;
