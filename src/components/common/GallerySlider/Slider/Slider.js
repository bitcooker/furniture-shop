import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Slider.module.scss';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Slider = ({ topSeller, isFeatured, isTopSeller, isSaleOff, isTopRated }) => {
  return (
    <div className={'row no-gutters ' + styles.sliderList}>
      <div className={'col-auto ' + styles.sliderArrow}>
        {' '}
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </div>

      {isFeatured &&
        topSeller.slice(0, 6).map(item => (
          <div
            className={'col ' + styles.product}
            key={item.image}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${item.image})`,
              backgroundSize: 'cover',
            }}
          ></div>
        ))}

      {isTopSeller &&
        topSeller.slice(7, 14).map(item => (
          <div
            className={'col ' + styles.product}
            key={item.image}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${item.image})`,
              backgroundSize: 'cover',
            }}
          ></div>
        ))}

      {isSaleOff &&
        topSeller.slice(14, 21).map(item => (
          <div
            className={'col ' + styles.product}
            key={item.image}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${item.image})`,
              backgroundSize: 'cover',
            }}
          ></div>
        ))}

      {isTopRated &&
        topSeller.slice(3, 8).map(item => (
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
  isFeatured: PropTypes.node,
  isTopSeller: PropTypes.node,
  isSaleOff: PropTypes.node,
  isTopRated: PropTypes.node,
};
export default Slider;
