import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedback';
import PromoSection from '../../features/PromoSection/PromoSection';

const Homepage = () => (
  <div className={styles.root}>
    <PromoSection />
    <FeatureBoxes />
    <NewFurniture />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
