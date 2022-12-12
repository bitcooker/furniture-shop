import React from 'react';
import { useSelector } from 'react-redux';
import { getBrands } from '../../../redux/brandsRedux';

import styles from './Brands.module.scss';

const Brands = () => {
  const brands = useSelector(state => getBrands(state));
  return (
    <div className='container mt-3 mb-5'>
      <div className={`border-top border-bottom ${styles.brands}`}>
        <div className={`border m-3 ${styles.arrow}`}>
          <span className='text-muted'>{'<'}</span>
        </div>
        <div className='row d-flex w-100 m-3 text-center'>
          <div className='col m-2 border'>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/brands/${brands[0].photo}`}
              alt='brand logo'
            />
          </div>
          <div className='col m-2 border'>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/brands/${brands[1].photo}`}
              alt='brand logo'
            />
          </div>
          <div className='col m-2 border'>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/brands/${brands[2].photo}`}
              alt='brand logo'
            />
          </div>
          <div className='col m-2 border'>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/brands/${brands[3].photo}`}
              alt='brand logo'
            />
          </div>
          <div className='col m-2 border'>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/brands/${brands[4].photo}`}
              alt='brand logo'
            />
          </div>
          <div className='col m-2 border'>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/brands/${brands[5].photo}`}
              alt='brand logo'
            />
          </div>
        </div>
        <div className={`border m-3 ${styles.arrow}`}>
          <span className='text-muted'>{'>'}</span>
        </div>
      </div>
    </div>
  );
};

export default Brands;
