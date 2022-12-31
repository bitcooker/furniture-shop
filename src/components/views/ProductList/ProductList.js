/* eslint-disable indent */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAll } from '../../../redux/productsRedux';
import Filters from '../../common/Filters/Filters';
import Banner from '../Banner/Banner';
import styles from './ProductList.module.scss';
import ProductListItem from './ProductListItem/ProductListItem';

const ProductList = () => {
  const { categoryId } = useParams();
  const allProducts = useSelector(getAll);

  const [counter, setCounter] = useState(6);

  const handleCounter = value => {
    setCounter(value);
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
                <form>
                  <label>
                    Sort By
                    <select>
                      <option value='lowest'>Price: Lowest price</option>
                      <option value='highest'>Price: Highest price</option>
                      <option selected value='mostPurchased'>
                        Most purchased
                      </option>
                      <option value='mostFavorites'>Most Favorites</option>
                    </select>
                  </label>
                </form>
                <form onChange={e => handleCounter(e.target.value)}>
                  <label>
                    Show
                    <select>
                      <option selected value='6'>
                        6
                      </option>
                      <option value='12'>12</option>
                      <option value='24'>24</option>
                    </select>
                  </label>
                </form>
              </div>
            </div>
            {allProducts.map(
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
            <Filters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
