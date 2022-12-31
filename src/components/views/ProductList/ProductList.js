/* eslint-disable indent */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getAll,
  getSortByZ_A,
  getSortByHighPrice,
  getSortByA_Z,
  getSortLowPrice,
} from '../../../redux/productsRedux';
import Banner from '../Banner/Banner';
import styles from './ProductList.module.scss';
import ProductListItem from './ProductListItem/ProductListItem';

const ProductList = () => {
  const { categoryId } = useParams();
  const allProducts = useSelector(getAll);

  const LOW_PRICE = useSelector(getSortLowPrice);
  const HIGH_PRICE = useSelector(getSortByHighPrice);
  const SORT_Z_A = useSelector(getSortByZ_A);
  const SORT_A_Z = useSelector(getSortByA_Z);

  const [counter, setCounter] = useState(24);
  const [renderAllProducts, setActiveAllProducts] = useState(LOW_PRICE);

  const handleCounter = value => {
    setCounter(value);
  };

  const handleOption = value => {
    setActiveAllProducts(
      value === 'lowest'
        ? LOW_PRICE
        : value === 'highest'
        ? HIGH_PRICE
        : value === 'sort_A_Z'
        ? SORT_A_Z
        : value === 'sort_Z_A'
        ? SORT_Z_A
        : allProducts
    );
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <Banner categoryId={categoryId} />
        <div className={styles.greyLine}>
          <p>
            Home <span>&gt;</span> <span>{categoryId}</span>
          </p>
        </div>
        <div className='row'>
          <div className='col-9'>
            <div className={styles.sortLine}>
              <h4>{categoryId}</h4>
              <div className={styles.sortLineRight}>
                <form onChange={e => handleOption(e.target.value)}>
                  <label>
                    Sort By
                    <select>
                      <option selected value='lowest'>
                        Price: Lowest price
                      </option>
                      <option value='highest'>Price: Highest price</option>
                      <option value='sort_A_Z'>Sort: A-Z</option>
                      <option value='sort_Z_A'>Sort: Z-A</option>
                    </select>
                  </label>
                </form>
                <form onChange={e => handleCounter(e.target.value)}>
                  <label>
                    Show
                    <select>
                      <option value='6'>6</option>
                      <option value='12'>12</option>
                      <option selected value='24'>
                        24
                      </option>
                    </select>
                  </label>
                </form>
              </div>
            </div>
            {renderAllProducts.map(
              (product, index) =>
                index < counter && (
                  <ProductListItem
                    key={product.id}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    image={product.image}
                    priceOld={product.priceOld}
                    id={product.id}
                    userRating={product.userRating}
                    stars={product.stars}
                  />
                )
            )}
          </div>
          <div className='col-3'>
            <h5>Filter by categories</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
