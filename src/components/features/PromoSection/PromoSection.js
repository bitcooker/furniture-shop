import React from 'react';
import PropTypes from 'prop-types';
import HotDeals from '../../common/HotDeals/HotDeals';
import SaleSlider from '../../common/SaleSlider/SaleSlider';

const PromoSection = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='d-none d-md-block col-4'>
          <HotDeals />
        </div>
        <div className='col-md-8'>
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
