import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ProductComparison from '../../features/ProductComparison/ProductComparison';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedback';
import Promotions from '../../layout/Promotions/Promotions';
import Gallery from '../../features/Gallery/Gallery';
import Brands from '../../features/Brands/Brands';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Gallery />
    <Brands />
    <ProductComparison />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
