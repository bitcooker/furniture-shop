import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ProductComparison from '../../features/ProductComparison/ProductComparison';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedback';
import Promotions from '../../layout/Promotions/Promotions';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <ProductComparison />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
