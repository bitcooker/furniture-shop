import React from 'react';
import { useSelector } from 'react-redux';
import { getComparedProducts } from '../../../redux/productsRedux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import Product from './Product';

import styles from './ProductComparison.module.scss';

const ProductComparison = () => {
  const products = useSelector(state => getComparedProducts(state));

  if (products.length === 0) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <h4>Compare Products</h4>
        <div className={styles.products}>
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
    );
  }
};

export default ProductComparison;
