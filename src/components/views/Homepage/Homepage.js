import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedback';
import Promotions from '../../layout/Promotions/Promotions';
import Brands from '../../features/Brands/Brands';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Brands />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
