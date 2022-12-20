import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Dots.module.scss';

const Dots = ({ changeEvent, activeNumber, dotsNumber, isHotDeals }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    let newDots = [];

    for (let i = 0; i < dotsNumber; i++) {
      newDots.push(
        <li key={i}>
          <a
            onClick={() => {
              changeEvent(i);
            }}
            className={`${i === activeNumber && styles.active}`}
          >
            page {i}
          </a>
        </li>
      );
    }

    setDots(newDots);
  }, [dotsNumber, activeNumber, changeEvent]);

  return (
    <div className={`col-auto ${isHotDeals ? styles.hotDealsDots : styles.dots}`}>
      <ul>{dots}</ul>
    </div>
  );
};

Dots.propTypes = {
  changeEvent: PropTypes.func,
  activeNumber: PropTypes.number,
  dotsNumber: PropTypes.number,
  isHotDeals: PropTypes.bool,
};

export default Dots;
