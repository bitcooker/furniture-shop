import React from 'react';
import styles from './Badge.module.scss';
import PropTypes from 'prop-types';
import ProductRating from '../../ProductRating/ProductRating';

const Badge = ({ name, ...props }) => {
  return (
    <div className={styles.badge}>
      <h5>{`${name}`}</h5>
      <div>
        <ProductRating
          id={props.id}
          stars={props.stars}
          userRating={props.userRating}
        />
      </div>
    </div>
  );
};

Badge.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  userRating: PropTypes.node,
  stars: PropTypes.number,
};

export default Badge;
