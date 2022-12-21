import React from 'react';
import PropTypes from 'prop-types';

import { RWD_MODES } from '../../../redux/initialState';

import styles from './NewFurniture.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';
import ProductBoxTemplate from '../../common/ProductBoxTemplate/ProductBoxTemplate';
import Dots from '../../common/Dot/Dots';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    newFurnitureAnimation: false,
  };

  handlePageChange(newPage) {
    const animationTime = 250; // in ms

    this.setState({ newFurnitureAnimation: true });

    setTimeout(() => {
      this.setState({
        newFurnitureAnimation: false,
        activePage: newPage,
      });
    }, animationTime);
  }

  handleCategoryChange(newCategory, productsRef) {
    const animationTime = 350; // in ms

    this.setState({ newFurnitureAnimation: true });

    setTimeout(() => {
      this.setState({
        activeCategory: newCategory,
        newFurnitureAnimation: false,
        activePage: 0,
      });
    }, animationTime);
  }

  getDisplayedProductsCount(rwdMode) {
    switch (rwdMode) {
      case RWD_MODES.DESKTOP:
        return 8;
      case RWD_MODES.TABLET:
        return 4;
      case RWD_MODES.MOBILE:
        return 1;
      default:
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
              <ProductBoxTemplate {...item} newFurniture={true} />
            </div>
          ))}
      </>
    );
  }

  getDots(categoryProducts, rwdMode) {
    let dotsNumber = 0;

    if (rwdMode === RWD_MODES.DESKTOP) {
      dotsNumber = Math.ceil(categoryProducts.length / 8);
    } else if (rwdMode === RWD_MODES.TABLET) {
      dotsNumber = Math.ceil(categoryProducts.length / 4);
    } else {
      dotsNumber = Math.ceil(categoryProducts.length / 1);
    }

    return dotsNumber;
  }

  render() {
    const { activeCategory, activePage, newFurnitureAnimation } = this.state;
    const { categories, products, rwdMode } = this.props;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    this.productsRef = React.createRef();

    const changePage = pageNumber => {
      const animationTime = 250; // in ms

      this.setState({ newFurnitureAnimation: true });

      setTimeout(() => {
        this.setState({
          newFurnitureAnimation: false,
          activePage: pageNumber,
        });
      }, animationTime);
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-md-8 col-lg-9 col-xl-10 ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() =>
                          this.handleCategoryChange(item.id, this.productsRef)
                        }
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <Dots
                changeEvent={changePage}
                activeNumber={activePage}
                dotsNumber={this.getDots(categoryProducts, rwdMode)}
              />
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
            <div
              className={`row ${styles.products} ${
                newFurnitureAnimation ? styles.fadeOut : styles.fadeIn
              }`}
            >
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
