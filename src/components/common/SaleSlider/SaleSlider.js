import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getPromoProducts } from '../../../redux/productsRedux';
import styles from './SaleSlider.module.scss';
import Button from '../Button/Button';
import Swipeable from '../Swipeable/Swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SaleSlider = () => {
  const promoProducts = useSelector(getPromoProducts);
  const [activeSlide, setActiveSlide] = useState(0);
  const promoProductsCount = promoProducts.length;
  const [animation, setAnimation] = useState(false);

  const handleSlideChange = newSlide => {
    setTimeout(() => {
      setActiveSlide(newSlide);
      setAnimation(false);
    }, 350);
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      handleSlideChange(activeSlide - 1);
    }
    if (activeSlide === 0) {
      handleSlideChange(promoProductsCount - 1);
    }
    setAnimation(true);
  };

  const nextSlide = () => {
    if (activeSlide < promoProductsCount - 1) {
      handleSlideChange(activeSlide + 1);
    }
    if (activeSlide === promoProductsCount - 1) {
      handleSlideChange(0);
    }
    setAnimation(true);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Swipeable leftAction={nextSlide} rightAction={prevSlide}>
          <img
            className={`${styles.image} ${animation ? styles.fadeOut : styles.fadeIn}`}
            src={`${process.env.PUBLIC_URL}/images/products/${promoProducts[activeSlide].image}`}
            alt={`Furniture-${promoProducts[activeSlide].image}`}
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
        </Swipeable>
      </div>
      <div className='row'>
        <Button onClick={() => prevSlide()} variant='main' className='col text-center'>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </Button>
        <Button onClick={() => nextSlide()} variant='main' className='col text-center'>
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
