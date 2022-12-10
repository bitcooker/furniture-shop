import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <div className={styles.dropDown}>
        <div className={styles.selectLabel}>
          <FontAwesomeIcon className={styles.icon} icon={faListUl} />
          Select a category
          <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
        </div>
        <ul>
          <li>Bed</li>
          <li>Chair</li>
          <li>Sofa</li>
          <li>Table</li>
          <li>Dining</li>
        </ul>
      </div>
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
