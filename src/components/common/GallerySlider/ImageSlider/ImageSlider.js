import React from 'react';
import styles from './ImageSlider.module.scss';
import PropTypes from 'prop-types';

const ImageSlider = ({ topSeller }) => {
  return (
    <img
      className={styles.image}
      src={`${process.env.PUBLIC_URL}/images/products/${topSeller[2].image}`}
      alt='chair'
    />
  );
};

ImageSlider.propTypes = {
  topSeller: PropTypes.node,
};

export default ImageSlider;
