import React, { useState } from 'react';
import styles from './GallerySlider.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import PanelLeftButtons from './PanelLeftButtons/PanelLeftButtons';
import BottomSlider from './BottomSlider/BottomSlider';
import Badge from './Badge/Badge';
import PanelTopButtons from './PanelTopButtons/PanelTopButtons';
import Promo from './Promo/Promo';
import ImageSlider from './ImageSlider/ImageSlider';
import PropTypes from 'prop-types';

const GallerySlider = () => {
  const topSeller = useSelector(getAll);
  const [activeImage, setActiveImage] = useState('bed_13.jpg');

  return (
    <div className={styles.root}>
      <PanelTopButtons />
      <PanelLeftButtons />
      <ImageSlider
        topSeller={topSeller}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
      <Promo topSeller={topSeller} />
      <Badge topSeller={topSeller} />
      <BottomSlider
        topSeller={topSeller}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  );
};

GallerySlider.propTypes = {
  activeImage: PropTypes.node,
  setActiveImage: PropTypes.node,
};

export default GallerySlider;
