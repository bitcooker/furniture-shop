import React, { useState } from 'react';
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

  const [isFeatured, setIsFeatured] = useState(true);
  const [isTopSeller, setIsTopSeller] = useState(false);
  const [isSaleOff, setIsSaleOff] = useState(false);
  const [isTopRated, setIsTopRated] = useState(false);

  return (
    <div className={styles.root}>
      <PanelTopButtons
        setIsFeatured={setIsFeatured}
        setIsTopSeller={setIsTopSeller}
        setIsSaleOff={setIsSaleOff}
        setIsTopRated={setIsTopRated}
      />
      <PanelLeftButtons />
      <ImageSlider topSeller={topSeller} />
      <Promo topSeller={topSeller} />
      <Badge topSeller={topSeller} />
      <Slider
        topSeller={topSeller}
        isFeatured={isFeatured}
        isTopSeller={isTopSeller}
        isSaleOff={isSaleOff}
        isTopRated={isTopRated}
      />
    </div>
  );
};

export default GallerySlider;
