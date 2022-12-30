import React, { useState } from 'react';
import styles from './SingleProduct.module.scss';
import PropTypes from 'prop-types';
import ProductRating from '../../../common/ProductRating/ProductRating';
import Button from '../../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faSearch,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';

const SingleProduct = ({
  image,
  category,
  price,
  name,
  priceOld,
  id,
  stars,
  userRating,
}) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className='row mb-5'>
        <div className='col-4'>
          <div className={styles.photo}>
            <span>
              <p>sale</p>
            </span>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/products/${image}`}
              alt={`Furniture-${category}`}
            />
          </div>
        </div>
        <div className='col-8'>
          <div className={styles.description}>
            <h4>{name}</h4>
            <div className={styles.prices}>
              <h5>${price}</h5>
              <h5>
                {' '}
                {priceOld && (
                  <s className='my-auto mx-2'>
                    <span className='text-muted'>${priceOld}</span>
                  </s>
                )}
              </h5>
            </div>
            <ProductRating />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className={styles.buttons}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </Button>
              <Button
                className={isShown ? styles.active : styles.button}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                variant='outline'
              >
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  image: PropTypes.node,
  category: PropTypes.string,
  name: PropTypes.node,
  price: PropTypes.number,
  priceOld: PropTypes.number,
  id: PropTypes.node,
  userRating: PropTypes.number,
  stars: PropTypes.number,
};

export default SingleProduct;
