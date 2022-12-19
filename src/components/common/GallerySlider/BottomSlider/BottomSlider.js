import React from 'react';
import styles from './BottomSlider.module.scss';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './ReactSlick.css';

const BottomSlider = ({
  filterFeatured,
  filterSaleOff,
  filterTopRated,
  filterTopSeller,
  setActiveElement,
  isFeatured,
  isTopSeller,
  isSaleOff,
  isTopRated,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const handleActivePhoto = item => {
    setActiveElement(item);
  };

  return (
    <div className='gallerySlider'>
      <div className={styles.slider}>
        <Slider {...settings}>
          {isFeatured &&
            filterFeatured.map(item => (
              <img
                className={styles.product}
                key={item.image}
                src={`${process.env.PUBLIC_URL}/images/products/${item.image}`}
                alt='furniture'
                data-image={item.image}
                onClick={() => handleActivePhoto(item)}
              />
            ))}
          {isTopSeller &&
            filterTopSeller.map(item => (
              <img
                className={styles.product}
                key={item.image}
                src={`${process.env.PUBLIC_URL}/images/products/${item.image}`}
                alt='furniture'
                data-image={item.image}
                onClick={() => handleActivePhoto(item)}
              />
            ))}
          {isSaleOff &&
            filterSaleOff.map(item => (
              <img
                className={styles.product}
                key={item.image}
                src={`${process.env.PUBLIC_URL}/images/products/${item.image}`}
                alt='furniture'
                data-image={item.image}
                onClick={() => handleActivePhoto(item)}
              />
            ))}
          {isTopRated &&
            filterTopRated.map(item => (
              <img
                className={styles.product}
                key={item.image}
                src={`${process.env.PUBLIC_URL}/images/products/${item.image}`}
                alt='furniture'
                data-image={item.image}
                onClick={() => handleActivePhoto(item)}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

BottomSlider.propTypes = {
  topSeller: PropTypes.node,
  setActiveElement: PropTypes.node,
  isFeatured: PropTypes.node,
  isTopSeller: PropTypes.node,
  isSaleOff: PropTypes.node,
  isTopRated: PropTypes.node,
  filterFeatured: PropTypes.func,
  filterTopSeller: PropTypes.func,
  filterTopRated: PropTypes.func,
  filterSaleOff: PropTypes.func,
};
export default BottomSlider;
