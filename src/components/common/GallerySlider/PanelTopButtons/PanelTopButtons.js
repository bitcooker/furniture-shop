import React from 'react';
import styles from './PanelTopButtons.module.scss';

const PanelTopButtons = () => {
  return (
    <div className={styles.topBtn}>
      <a href='#'>Featured</a>
      <a href='#' className={styles.active}>
        Top seller
      </a>
      <a href='#'>Sale off</a>
      <a href='#'>Top rated</a>
    </div>
  );
};

export default PanelTopButtons;
