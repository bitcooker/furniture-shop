import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Promotions.module.scss';

import { getPromotions } from '../../../redux/promoRedux';

const Promotions = () => {
  const promos = useSelector(state => getPromotions(state));
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row m-0 mb-5 text-center'>
          <div className={`col-md-6`}>
            <img
              className={styles.firstPromo}
              src={`${process.env.PUBLIC_URL}/images/promo/${promos[0].photo}`}
              alt='promotion banner'
            />
          </div>
          <div className='col-md-6'>
            <div className={`row m-0`}>
              <img
                className={styles.secondPromo}
                src={`${process.env.PUBLIC_URL}/images/promo/${promos[1].photo}`}
                alt='promotion banner'
              />
            </div>
            <div className={`row m-0`}>
              <img
                className={styles.thirdPromo}
                src={`${process.env.PUBLIC_URL}/images/promo/${promos[2].photo}`}
                alt='promotion banner'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
