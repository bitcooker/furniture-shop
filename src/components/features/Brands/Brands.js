import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBrands } from '../../../redux/brandsRedux';
import { getMode } from '../../../redux/rwdModeRedux';
import styles from './Brands.module.scss';

const Brands = () => {
  const brands = useSelector(state => getBrands(state));
  const mode = useSelector(state => getMode(state));
  const visibleElements = { mobile: 2, tablet: 3, desktop: 6 };
  const [active, setActive] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [activeBrands, setActiveBrands] = useState([[active]]);

  useEffect(() => {
    let activeBrands = [];
    for (let i = 0; i < brands.length; i += visibleElements[mode]) {
      const chunk = brands.slice(i, i + visibleElements[mode]);
      activeBrands.push(chunk);
    }
    setActiveBrands(activeBrands);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const handleSlideChange = newSlide => {
    setTimeout(() => {
      setActive(newSlide);
      setAnimation(false);
    }, 300);
  };

  const prevPart = () => {
    if (active > 0) {
      handleSlideChange(active - 1);
    }
    if (active === 0) {
      handleSlideChange(activeBrands.length - 1);
    }
    setAnimation(true);
  };

  const nextPart = () => {
    if (active < activeBrands.length - 1) {
      handleSlideChange(active + 1);
    }
    if (active === activeBrands.length - 1) {
      handleSlideChange(0);
    }
    setAnimation(true);
  };

  return (
    <div className='container mt-3 mb-5'>
      <div className={`border-top border-bottom ${styles.brands}`}>
        <div onClick={prevPart} className={`border m-3 ${styles.arrow}`}>
          <span className='text-muted'>{'<'}</span>
        </div>
        <div className='row d-flex align-item-center  m-3 text-center'>
          {activeBrands[active].map(item => (
            <div key={item} className='col border m-2'>
              <img
                className={`${styles.image} ${
                  animation ? styles.fadeOut : styles.fadeIn
                }`}
                src={`${process.env.PUBLIC_URL}/images/brands/${item.photo}`}
                alt='brand logo'
              />
            </div>
          ))}
        </div>
        <div onClick={nextPart} className={`border m-3 ${styles.arrow}`}>
          <span className='text-muted'>{'>'}</span>
        </div>
      </div>
    </div>
  );
};

export default Brands;
