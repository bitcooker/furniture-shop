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
          {brands.map(item => (
            <div key={item} className='col m-2 border'>
              <img
                className={styles.image}
                src={`${process.env.PUBLIC_URL}/images/brands/${item.photo}`}
                alt='brand logo'
              />
            </div>
          ))}
        </div>
        <div className={`border m-3 ${styles.arrow}`}>
          <span className='text-muted'>{'>'}</span>
        </div>
      </div>
    </div>
  );
};

export default Brands;
