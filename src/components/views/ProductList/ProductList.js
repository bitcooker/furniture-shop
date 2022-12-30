import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAll } from '../../../redux/productsRedux';
import Banner from '../Banner/Banner';
import styles from './ProductList.module.scss';
import SingleProduct from './SingleProduct/SingleProduct';

const ProductList = () => {
  const { categoryId } = useParams();
  const allProducts = useSelector(getAll);
  const filterProduct = allProducts.filter(product => product.category === categoryId);
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
            {categoryId === 'furniture'
              ? allProducts.map(product => (
                  <SingleProduct
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
                ))
              : filterProduct.map(product => (
                  <SingleProduct
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
