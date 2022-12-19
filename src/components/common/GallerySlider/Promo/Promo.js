import React from 'react';
import styles from './Promo.module.scss';
import PropTypes from 'prop-types';

const Promo = ({ price, priceOld }) => {
  return (
    <div className={styles.promo}>
      <h4>${price}</h4>
      {priceOld && <h6>${priceOld}</h6>}
    </div>
  );
};

Promo.propTypes = {
  price: PropTypes.number,
  priceOld: PropTypes.number,
};

export default Promo;
