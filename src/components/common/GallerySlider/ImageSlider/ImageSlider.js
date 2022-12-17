import React from 'react';
import styles from './ImageSlider.module.scss';
import PropTypes from 'prop-types';

const ImageSlider = ({ image }) => {
  return (
    <img
      className={styles.image}
      src={`${process.env.PUBLIC_URL}/images/products/${image}`}
      alt='chair'
    />
  );
};

ImageSlider.propTypes = {
  image: PropTypes.node,
};

export default ImageSlider;
