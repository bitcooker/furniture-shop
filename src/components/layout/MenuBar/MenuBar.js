import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { NavLink } from 'react-router-dom';

const MenuBar = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <ProductSearch />
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/shop/furniture'>Furniture</NavLink>
            <NavLink to='/shop/chair'>Chair</NavLink>
            <NavLink to='/shop/table'>Table</NavLink>
            <NavLink to='/shop/bedroom'>Bedroom</NavLink>
            <NavLink to='/'>Blog</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
