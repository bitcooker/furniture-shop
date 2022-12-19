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

  const [isFeatured, setIsFeatured] = useState(true);
  const [isTopSeller, setIsTopSeller] = useState(false);
  const [isSaleOff, setIsSaleOff] = useState(false);
  const [isTopRated, setIsTopRated] = useState(false);

  const filterFeatured = topSeller.filter(item => item.isFeatured === true);
  const filterTopRated = topSeller.filter(item => item.isTopRated === true);
  const filterSaleOff = topSeller.filter(item => item.isSaleOff === true);
  const filterTopSeller = topSeller.filter(item => item.isTopSeller === true);

  const [activeElement, setActiveElement] = useState(topSeller[0]);

  return (
    <div className={styles.root}>
      <PanelTopButtons
        isFeatured={isFeatured}
        setIsFeatured={setIsFeatured}
        isTopSeller={isTopSeller}
        setIsTopSeller={setIsTopSeller}
        isSaleOff={isSaleOff}
        setIsSaleOff={setIsSaleOff}
        isTopRated={isTopRated}
        setIsTopRated={setIsTopRated}
      />
      <PanelLeftButtons />
      <ImageSlider
        image={activeElement.image}
        name={activeElement.name}
        price={activeElement.price}
      />
      <Promo price={activeElement.price} priceOld={activeElement.priceOld} />
      <Badge name={activeElement.name} {...activeElement} />
      <BottomSlider
        filterFeatured={filterFeatured}
        filterSaleOff={filterSaleOff}
        filterTopSeller={filterTopSeller}
        filterTopRated={filterTopRated}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
        isFeatured={isFeatured}
        isTopRated={isTopRated}
        isTopSeller={isTopSeller}
        isSaleOff={isSaleOff}
      />
    </div>
  );
};

export default GallerySlider;
