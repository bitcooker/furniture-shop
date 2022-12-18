import React, { useState } from 'react';

import PropTypes from 'prop-types';
import styles from './ProductBoxTemplate.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductRating from '../ProductRating/ProductRating';
import HotDealsIcons from '../HotDeals/HotDealsIcons/HotDealsIcons';
import NewFurnitureProductButtons from '../../features/NewFurniture/NewFurnitureProductButtons/NewFurnitureProductButtons';
import { useProductsAction } from '../../../hooks/product-hook';

const ProductBoxTemplate = ({ hotDeals, newFurniture, isCompared, ...props }) => {
  const [isShown, setIsShown] = useState(false);
  const { favoriteAction, compareAction } = useProductsAction();
  const product = {
    id: props.id,
    isFavorite: props.isFavorite,
    isCompared: isCompared,
  };

  const favoriteChangeHandler = e => {
    e.preventDefault();
    favoriteAction(product);
  };

  const handleAddToCompare = e => {
    e.preventDefault();
    compareAction(product);
  };

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={styles.photo}>
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/products/${props.image}`}
          alt={`Furniture-${props.category}`}
        />

        {props.promo && <div className={styles.sale}>{props.promo}</div>}
        {newFurniture && (
          <div
            className={
              isShown ? styles.newFurnitureButtons : styles.newFurnitureButtonsHidden
            }
          >
            <NewFurnitureProductButtons id={props.id} />
          </div>
        )}
        {hotDeals && (
          <div className={isShown ? styles.hotDealsButton : styles.hotDealsHidden}>
            <HotDealsIcons id={props.id} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h5>{props.name}</h5>
        <ProductRating
          id={props.id}
          stars={props.stars}
          userRating={props.userRating}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={favoriteChangeHandler}
            className={props.isFavorite ? `${styles.favoriteActive}` : null}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={e => handleAddToCompare(e)}
            className={isCompared ? `${styles.isCompared}` : null}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {props.priceOld && (
            <s className='my-auto mx-2'>
              <span className='text-muted'>${props.priceOld}</span>
            </s>
          )}
          <Button className={isShown ? styles.isShownPrice : undefined} variant='small'>
            $ {props.price}
          </Button>
        </div>
      </div>
    </div>
  );
};
ProductBoxTemplate.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceOld: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.number,
  category: PropTypes.string,
  image: PropTypes.node,
  isFavorite: PropTypes.bool,
  newFurniture: PropTypes.bool,
  hotDeals: PropTypes.bool,
  isCompared: PropTypes.bool,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default ProductBoxTemplate;
