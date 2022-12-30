import React from 'react';
import styles from './Promo.module.scss';
import PropTypes from 'prop-types';
import { useShowPrice } from '../../../../hooks/price-hook';

const Promo = ({ topSeller }) => {
  const priceToDisplay = useShowPrice(topSeller[2].price);
  const priceOldToDisplay = useShowPrice(topSeller[2].priceOld);
  return (
    <div className={styles.promo}>
      <h4>{priceToDisplay}</h4>
      {topSeller[2].priceOld && <h6>{priceOldToDisplay}</h6>}
    </div>
  );
};

Promo.propTypes = {
  topSeller: PropTypes.object,
};

export default Promo;
