import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './HotDeals.module.scss';
import { useSelector } from 'react-redux';
import { getDiscountedProducts } from '../../../redux/productsRedux';
import ProductBoxTemplate from '../ProductBoxTemplate/ProductBoxTemplate';

const HotDeals = () => {
  const discountedProducts = useSelector(getDiscountedProducts);
  const [activeProduct, setActiveProduct] = useState(0);
  const handleProductChange = newProduct => {
    setActiveProduct(newProduct);
  };

  const productCount = discountedProducts.length;

  const dots = [];
  for (let i = 0; i < productCount; i++) {
    dots.push(
      <li>
        <a
          onClick={() => handleProductChange(i)}
          className={i === activeProduct && styles.active}
        >
          discountedProducts {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div>HOT DEALS</div>
        <div className={'col-auto ' + styles.dots}>
          <ul>{dots}</ul>
        </div>
      </div>
      <div>
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
