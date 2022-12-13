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
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import clsx from 'clsx';

const GallerySlider = () => {
  const topSeller = useSelector(getAll);

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
      <div className={clsx(styles.buttons, styles.tooltip)}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </Button>
        <span className={styles.tooltiptext}>Add to favorite</span>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
        </Button>
        <span className={styles.tooltiptext}>Add to compare</span>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Button>
        <span className={styles.tooltiptext}> Quick view</span>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
        </Button>
        <span className={styles.tooltiptext}>Add to cart</span>
      </div>
      <img
        className={styles.image}
        src={`${process.env.PUBLIC_URL}/images/products/${topSeller[2].image}`}
        alt='chair'
      />
      <div className={styles.promo}>
        <h4>${`${topSeller[2].price}`}</h4>
        <h6>${`${topSeller[2].priceOld}`}</h6>
      </div>
      <div className={styles.badge}>
        <h5>{`${topSeller[2].name}`}</h5>
        <div>
          {[1, 2, 3, 4, 5].map(i => (
            <span key={i} href='#'>
              {i <= 3 ? (
                <FontAwesomeIcon className={styles.stars} icon={faStar}>
                  {i} stars
                </FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon className={styles.stars} icon={farStar}>
                  {i} stars
                </FontAwesomeIcon>
              )}
            </span>
          ))}
        </div>
      </div>
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
    </div>
  );
};

export default GallerySlider;
