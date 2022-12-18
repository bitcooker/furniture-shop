import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllTags } from '../../../../redux/tagsRedux';
import styles from './PanelTopButtons.module.scss';

const PanelTopButtons = ({
  setIsFeatured,
  setIsTopSeller,
  setIsSaleOff,
  setIsTopRated,
}) => {
  const allTags = useSelector(getAllTags);

  const handleFeatured = e => {
    e.preventDefault();
    setIsFeatured(true);
    setIsSaleOff(false);
    setIsTopRated(false);
    setIsTopSeller(false);
  };

  const handleTopSeller = e => {
    e.preventDefault();
    setIsFeatured(false);
    setIsSaleOff(false);
    setIsTopRated(false);
    setIsTopSeller(true);
  };

  const handleSaleOff = e => {
    e.preventDefault();
    setIsFeatured(false);
    setIsSaleOff(true);
    setIsTopRated(false);
    setIsTopSeller(false);
  };

  const handleTopRated = e => {
    e.preventDefault();
    setIsFeatured(false);
    setIsSaleOff(false);
    setIsTopRated(true);
    setIsTopSeller(false);
  };

  return (
    <div className={styles.topBtn}>
      <a href='#' key={allTags[0].id} onClick={handleFeatured}>
        {allTags[0].name}
      </a>
      <a href='#' key={allTags[1].id} onClick={handleTopSeller}>
        {allTags[1].name}
      </a>
      <a href='#' key={allTags[2].id} onClick={handleSaleOff}>
        {allTags[2].name}
      </a>
      <a href='#' key={allTags[3].id} onClick={handleTopRated}>
        {allTags[3].name}
      </a>
    </div>
  );
};

PanelTopButtons.propTypes = {
  setIsFeatured: PropTypes.node,
  setIsTopSeller: PropTypes.node,
  setIsSaleOff: PropTypes.node,
  setIsTopRated: PropTypes.node,
};

export default PanelTopButtons;
