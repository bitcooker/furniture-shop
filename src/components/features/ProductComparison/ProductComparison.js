import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import Product from './Product';

import styles from './ProductComparison.module.scss';

const ProductComparison = () => {
  const products = useSelector(state => getAll(state));

  const [comparedProducts, setComparedProducts] = useState([]);

  const getComparedProducts = products =>
    products.filter(product => (product.isCompared ? true : false));

  useEffect(() => {
    setComparedProducts(getComparedProducts(products));
  }, [products]);

  return (
    <div className={styles.container}>
      {comparedProducts.length === 0 ? `` : <h4>Compare Products</h4>}
      <div className={styles.products}>
        {comparedProducts.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;
