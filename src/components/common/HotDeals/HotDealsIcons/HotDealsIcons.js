import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Button/Button';
import React from 'react';
import PropTypes from 'prop-types';
import { useProductsAction } from '../../../../hooks/product-hook';
import styles from './HotDealsIcons.module.scss';

const HotDealsIcons = props => {
  const { cartAction } = useProductsAction();

  const handleCart = e => {
    e.preventDefault();
    cartAction(props.id);
  };
  return (
    <>
      <Button variant='small' onClick={handleCart}>
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
HotDealsIcons.propTypes = {
  id: PropTypes.string,
};
export default HotDealsIcons;
