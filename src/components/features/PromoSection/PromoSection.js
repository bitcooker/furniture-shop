import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromoSection.module.scss';
import HotDeals from '../../common/HotDeals/HotDeals';
import SaleSlider from '../../common/SaleSlider/SaleSlider';
const PromoSection = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <HotDeals />
        </div>
        <div className='col-8'>
          <SaleSlider />
        </div>
      </div>
    </div>
  );
};
PromoSection.propTypes = {
  children: PropTypes.node,
};
export default PromoSection;
