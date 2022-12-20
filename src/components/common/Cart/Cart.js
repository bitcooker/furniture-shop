import React, { useState } from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const Cart = () => {
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleOpen = () => {
    setAnimation(true);
    setShow(true);
  };
  const handleClose = () => {
    setAnimation(true);
    setTimeout(() => {
      setShow(false);
    }, 600);
    setAnimation(false);
  };

  return (
    <>
      <div className={`col text-right ${styles.cart}`}>
        <a href='#' className={styles.cartBox}>
          <div className={styles.cartIcon} onClick={handleOpen}>
            <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
          </div>
          <div className={styles.cartCounter}>0</div>
        </a>
      </div>

      {show && (
        <div
          className={`${styles.openCart} ${
            animation ? styles.slideIn : styles.slideOut
          }`}
        >
          <div className={styles.header}>
            <h3>CART</h3>
            <Button variant='small' onClick={handleClose}>
              CLOSE
            </Button>
          </div>
          <div className={styles.line}></div>
          <div className={styles.products}>Your cart is empty</div>
        </div>
      )}
    </>
  );
};
export default Cart;
