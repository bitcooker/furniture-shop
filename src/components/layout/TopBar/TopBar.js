import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCurrency } from '../../../redux/currencyRedux';
import CurrencySelector from '../../features/CurrencySelector/CurrencySelector';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => {
  const currency = useSelector(state => getSelectedCurrency(state));

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col-8 col-sm-8 text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <a href='#' className={styles.navItem}>
                  {currency.id}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                  <ul className={styles.navItemLinks}>
                    <CurrencySelector />
                  </ul>
                </a>
              </li>
              <li>
                <a href='#'>
                  English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`col col-sm-4 d-flex flex-row justify-content-end p-0 ${styles.topMenu}`}
          >
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />
                  <span className={styles.iconLabel}>Login</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />
                  <span className={styles.iconLabel}>Register</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// TopBar.propTypes = {};

export default TopBar;
