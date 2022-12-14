import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { editProduct } from '../../../redux/productsRedux';

import styles from './Product.module.scss';

const Product = ({ id, image }) => {
  const dispatch = useDispatch();

  const handleRemove = e => {
    e.preventDefault();
    const payload = {
      id: id,
      isCompared: false,
    };
    dispatch(editProduct(payload));
  };

  return (
    <div className={styles.container}>
      <div className={styles.photo} onClick={e => handleRemove(e)}>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/products/${image}`}
          alt={``}
        />
        <div className={styles.removeIcon}>X</div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string,
  image: PropTypes.node,
};

export default Product;
