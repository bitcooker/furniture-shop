import React, { useState } from 'react';
import styles from './GallerySlider.module.scss';
import PanelLeftButtons from './PanelLeftButtons/PanelLeftButtons';
import BottomSlider from './BottomSlider/BottomSlider';
import Badge from './Badge/Badge';
import PanelTopButtons from './PanelTopButtons/PanelTopButtons';
import Promo from './Promo/Promo';
import ImageSlider from './ImageSlider/ImageSlider';
import { useSelector } from 'react-redux';
import { getProductByTags } from '../../../redux/productsRedux';

const GallerySlider = () => {
  const [activeTag, setActiveTag] = useState('Sale Off');

  const activeItems = useSelector(state => getProductByTags(state, activeTag));

  const [activeIndex, setActiveIndex] = useState(0);

  const activeElement = activeItems[activeIndex];

  return (
    <div className={styles.root}>
      <PanelTopButtons activeTag={activeTag} setActiveTag={setActiveTag} />
      <PanelLeftButtons />
      <ImageSlider image={activeElement.image} />
      <Promo price={activeElement.price} priceOld={activeElement.priceOld} />
      <Badge
        id={activeElement.id}
        name={activeElement.name}
        stars={activeElement.stars}
        userRating={activeElement.userRating}
      />
      <BottomSlider activeItems={activeItems} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default GallerySlider;
