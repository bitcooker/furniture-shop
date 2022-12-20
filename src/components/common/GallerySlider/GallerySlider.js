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

const GallerySlider = () => {
  const topSeller = useSelector(getAll);
  const [activeElement, setActiveElement] = useState(topSeller[0]);

  return (
    <div className={styles.root}>
      <PanelTopButtons />
      <PanelLeftButtons />
      <ImageSlider
        image={activeElement.image}
        name={activeElement.name}
        price={activeElement.price}
      />
      <Promo price={activeElement.price} priceOld={activeElement.priceOld} />
      <Badge name={activeElement.name} />
      <BottomSlider
        topSeller={topSeller}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
    </div>
  );
};

export default GallerySlider;
