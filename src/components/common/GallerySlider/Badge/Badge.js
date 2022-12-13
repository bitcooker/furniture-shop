import React from 'react';
import styles from './Badge.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const Badge = ({ topSeller }) => {
  return (
    <div className={styles.badge}>
      <h5>{`${topSeller[2].name}`}</h5>
      <div>
        {[1, 2, 3, 4, 5].map(i => (
          <span key={i} href='#'>
            {i <= 3 ? (
              <FontAwesomeIcon className={styles.stars} icon={faStar}>
                {i} stars
              </FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon className={styles.stars} icon={farStar}>
                {i} stars
              </FontAwesomeIcon>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

Badge.propTypes = {
  topSeller: PropTypes.node,
};

export default Badge;
