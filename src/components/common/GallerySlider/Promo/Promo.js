import React from 'react';
import styles from './Promo.module.scss';
import PropTypes from 'prop-types';

const Promo = ({ topSeller }) => {
  return (
    <div className={styles.promo}>
      <h4>${`${topSeller[2].price}`}</h4>
      {topSeller[1].priceOld && <h6>${`${topSeller[1].priceOld}`}</h6>}
    </div>
  );
};

Promo.propTypes = {
  topSeller: PropTypes.node,
};

export default Promo;
