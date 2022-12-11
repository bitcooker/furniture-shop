import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { editProduct } from '../../../redux/productsRedux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

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
      <Button variant='outline'>
        <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
      </Button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceOld: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  category: PropTypes.string,
  image: PropTypes.node,
  isFavorite: PropTypes.bool,
};

export default Product;
