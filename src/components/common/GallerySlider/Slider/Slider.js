import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Slider.module.scss';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Slider = ({ topSeller }) => {
  return (
    <div className={'row no-gutters ' + styles.sliderList}>
      <div className={'col-auto ' + styles.sliderArrow}>
        {' '}
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </div>

      {topSeller.slice(0, 6).map(item => (
        <div
          className={'col ' + styles.product}
          key={item.image}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${item.image})`,
            backgroundSize: 'cover',
          }}
        ></div>
      ))}
      <div className={'col-auto ' + styles.sliderArrow}>
        {' '}
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </div>
    </div>
  );
};

Slider.propTypes = {
  topSeller: PropTypes.node,
};
export default Slider;
