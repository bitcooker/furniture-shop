import React from 'react';
import styles from './ImageSlider.module.scss';
import PropTypes from 'prop-types';

const ImageSlider = ({ activeImage }) => {
  return (
    <img
      className={styles.image}
      src={`${process.env.PUBLIC_URL}/images/products/${activeImage}`}
      alt='chair'
    />
  );
};

ImageSlider.propTypes = {
  activeImage: PropTypes.node,
};

export default ImageSlider;
