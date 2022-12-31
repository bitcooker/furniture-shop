/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAll } from '../../../redux/productsRedux';
import Banner from '../Banner/Banner';
import styles from './ProductList.module.scss';
import ProductListItem from './ProductListItem/ProductListItem';

const ProductList = () => {
  const { categoryId } = useParams();
  const allProducts = useSelector(getAll);
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
            </div>
            {allProducts.map(product => (
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
            ))}
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
