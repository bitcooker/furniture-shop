import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Button/Button';
import React from 'react';
import styles from './HotDealsIcons.module.scss';

const HotDealsIcons = () => {
  return (
    <>
      <Button variant='small'>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
      </Button>
      <div className={styles.clock}>
        <div className={styles.circle}>
          <b>
            25
            <br /> DAYS
          </b>
        </div>
        <div className={styles.circle}>
          <b>
            10
            <br /> HRS
          </b>
        </div>
        <div className={styles.circle}>
          <b>
            45
            <br /> MINS
          </b>
        </div>
        <div className={styles.circle}>
          <b>
            30
            <br /> SEC
          </b>
        </div>
      </div>
    </>
  );
};
export default HotDealsIcons;
