import React from 'react';
import GallerySlider from '../../common/GallerySlider/GallerySlider';
import styles from './Gallery.module.scss';
import ImageBanner from './ImageBanner/ImageBanner';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-ms-12'>
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
            <ImageBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
