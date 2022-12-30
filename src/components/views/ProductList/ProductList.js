import React from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const params = useParams();

  return (
    <div className={styles.root}>
      <div className='container'>This is ProductList for {params.categoryId}</div>
    </div>
  );
};
// ProductList.propTypes = {};

export default ProductList;
