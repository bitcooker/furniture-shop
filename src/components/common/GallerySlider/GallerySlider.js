import React from 'react';
import styles from './GallerySlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faShoppingBasket,
  faExchangeAlt,
  faEye,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const GallerySlider = () => {
  return (
    <div className={styles.root}>
      <div className={styles.topBtn}>
        <a href='#'>Featured</a>
        <a href='#' className={styles.active}>
          Top seller
        </a>
        <a href='#'>Sale off</a>
        <a href='#'>Top rated</a>
      </div>
      <div className={styles.leftBtn}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
        </Button>
      </div>
      <img
        className={styles.image}
        src={`${process.env.PUBLIC_URL}/images/products/chair_1.jpg`}
        alt='chair'
      />
    </div>
  );
};

export default GallerySlider;
