import React from 'react';
import styles from './GallerySlider.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import PanelLeftButtons from './PanelLeftButtons/PanelLeftButtons';
import Slider from './Slider/Slider';
import Badge from './Badge/Badge';
import PanelTopButtons from './PanelTopButtons/PanelTopButtons';
import Promo from './Promo/Promo';
import ImageSlider from './ImageSlider/ImageSlider';

const GallerySlider = () => {
  const topSeller = useSelector(getAll);

  return (
    <div className={styles.root}>
      <PanelTopButtons />
      <PanelLeftButtons />
      <ImageSlider topSeller={topSeller} />
      <Promo topSeller={topSeller} />
      <Badge topSeller={topSeller} />
      <Slider topSeller={topSeller} />
    </div>
  );
};

export default GallerySlider;
