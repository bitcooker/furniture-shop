import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './HotDeals.module.scss';
import { useSelector } from 'react-redux';
import { getDiscountedProducts } from '../../../redux/productsRedux';
import ProductBoxTemplate from '../ProductBoxTemplate/ProductBoxTemplate';
import Dots from '../Dot/Dots';

const HotDeals = () => {
  const discountedProducts = useSelector(getDiscountedProducts);
  const [activeProduct, setActiveProduct] = useState(0);
  const productCount = discountedProducts.length;
  const timeoutRef = useRef(null);
  const [slowSlider, setSlowSlider] = useState(false);
  const [animation, setAnimation] = useState(false);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const sliderAction = () => {
    setAnimation(true);

    setTimeout(() => {
      setActiveProduct(prevIndex =>
        prevIndex === productCount - 1 ? 0 : prevIndex + 1
      );
      setAnimation(false);
    }, 350);
  };

  const handleOnClick = i => {
    setAnimation(true);
    setTimeout(() => {
      setActiveProduct(i);
      setAnimation(false);
    }, 350);
    setSlowSlider(true);
  };

  useEffect(() => {
    if (slowSlider) {
      timeoutRef.current = setTimeout(() => sliderAction(), 10000);
      setSlowSlider(false);
      return () => {
        resetTimeout();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProduct]);

  useEffect(() => {
    if (!slowSlider) {
      timeoutRef.current = setTimeout(() => sliderAction(), 3000);
      return () => {
        resetTimeout();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProduct]);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div>HOT DEALS</div>
        <Dots
          changeEvent={handleOnClick}
          activeNumber={activeProduct}
          dotsNumber={productCount}
          isHotDeals={true}
        />
      </div>
      <div className={animation ? styles.fadeOut : styles.fadeIn}>
        {discountedProducts.slice(activeProduct * 1, activeProduct + 1).map(item => (
          <div key={item.id}>
            <ProductBoxTemplate
              {...item}
              hotDeals={true}
              newFurniture={false}
              promo={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

HotDeals.propTypes = {
  children: PropTypes.node,
};
export default HotDeals;
