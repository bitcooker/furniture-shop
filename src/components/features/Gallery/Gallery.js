import React from 'react';
import GallerySlider from '../../common/GallerySlider/GallerySlider';
import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className={styles.panelBar}>
              <div className='row no-gutters'>
                <div className={'col ' + styles.heading}>
                  <h3>Furniture gallery</h3>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <GallerySlider />
              </div>
            </div>
          </div>
          <div className='col-sm-6 d-none d-sm-block'>
            <div className={styles.photo}>
              <img
                className={styles.image}
                src={`${process.env.PUBLIC_URL}/images/products/bed_11.jpg`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
