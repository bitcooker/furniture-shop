import React from 'react';
import { getCartCount } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => {
  const cart = useSelector(state => getCartCount(state));
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.container}`}>
          <div className={`col text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
          <div className={`col  text-center ${styles.logo}`}>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>{cart}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// CompanyClaim.propTypes = {};

export default CompanyClaim;
