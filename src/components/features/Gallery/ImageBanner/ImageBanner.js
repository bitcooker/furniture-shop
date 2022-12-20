import React from 'react';
import styles from './ImageBanner.module.scss';

const ImageBanner = () => {
  return (
    <div className={styles.photo}>
      <img
        className={styles.image}
        src={`${process.env.PUBLIC_URL}/images/products/bed_13.jpg`}
        alt='bed'
      />
      <div className={styles.photoInfo}>
        <div className={styles.price}>
          <h5>From</h5>
          <h1>$50.80</h1>
        </div>
        <h1 className={styles.mainText}>Bedroom Bed</h1>
        <button className={styles.btnRightPhoto}>Shop now</button>
      </div>
    </div>
  );
};

export default ImageBanner;
