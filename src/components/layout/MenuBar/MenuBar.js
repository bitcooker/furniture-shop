import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
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
          <li>
            <NavLink to={`/`} exact className={state => state && `${styles.active}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/shop/furniture`}
              className={state => state && `${styles.active}`}
            >
              Furniture
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/shop/chair`}
              className={state => state && `${styles.active}`}
            >
              Chair
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/shop/table`}
              className={state => state && `${styles.active}`}
            >
              Table
            </NavLink>
          </li>
          <li>
            <NavLink to={`/shop/sofa`} className={state => state && `${styles.active}`}>
              Sofa
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/shop/bedroom`}
              className={state => state && `${styles.active}`}
            >
              Bedroom
            </NavLink>
          </li>
          <li>
            <NavLink to={`/blog`} className={state => state && `${styles.active}`}>
              Blog
            </NavLink>
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
