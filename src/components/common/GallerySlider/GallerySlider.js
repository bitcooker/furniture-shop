import React from 'react';
import styles from './GallerySlider.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import PanelLeftButton from './PanelLeftButton/PanelLeftButton';
import Slider from './Slider/Slider';
import Badge from './Badge/Badge';

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
      <PanelLeftButton />
      <img
        className={styles.image}
        src={`${process.env.PUBLIC_URL}/images/products/${topSeller[2].image}`}
        alt='chair'
      />
      <div className={styles.promo}>
        <h4>${`${topSeller[2].price}`}</h4>
        {topSeller[2].priceOld ? <h6>${`${topSeller[2].priceOld}`}</h6> : ' '}
      </div>
      <Badge topSeller={topSeller} />
      <Slider topSeller={topSeller} />
    </div>
  );
};

export default GallerySlider;
