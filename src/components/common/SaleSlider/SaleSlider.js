import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getPromoProducts } from '../../../redux/productsRedux';
import styles from './SaleSlider.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SaleSlider = () => {
  const promoProducts = useSelector(getPromoProducts);

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/products/${promoProducts[0].image}`}
          alt={`Furniture-${promoProducts[0].image}`}
        />
        <div className={styles.info}>
          <h1 className={styles.text}>
            INDOOR <strong>FURNITURE</strong>
          </h1>
          <h5 className={styles.text}>SAVE UP TO 50% OF ALL FURNITURE</h5>
          <Button variant='white' className={styles.shopNow}>
            SHOP NOW
          </Button>
        </div>
      </div>
      <div className='row'>
        <Button variant='main' className='col text-center'>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </Button>
        <Button variant='main' className='col text-center'>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};
SaleSlider.propTypes = {
  children: PropTypes.node,
};
export default SaleSlider;
