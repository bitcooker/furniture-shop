import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.container}>
      {/* <div className='row align-items-center'> */}
      <div>
        {/* <div className='col'> */}
        <ProductSearch />
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      </div>
      <div className={'col-auto ' + styles.menu}>
        <ul>
          <li>
            <a href='#' className={styles.active}>
              Home
            </a>
          </li>
          <li>
            <a href='#'>Furniture</a>
          </li>
          <li>
            <a href='#'>Chair</a>
          </li>
          <li>
            <a href='#'>Table</a>
          </li>
          <li>
            <a href='#'>Sofa</a>
          </li>
          <li>
            <a href='#'>Bedroom</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
