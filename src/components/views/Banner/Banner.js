import React from 'react';
import styles from './Banner.module.scss';
import PropTypes from 'prop-types';

const Banner = ({ categoryId }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerTop}>
        <h1>Bedroom {categoryId} </h1>
      </div>
      <div className={styles.bannerBottom}>
        <p>Always 25% off or more</p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  categoryId: PropTypes.string,
};

export default Banner;
