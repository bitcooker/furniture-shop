import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { editProduct } from '../../../redux/productsRedux';

import styles from './ProductRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ProductRating = ({ id, stars, userRating }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [rating, setRating] = useState(userRating);

  const dispatch = useDispatch();

  const rateClickHandler = e => {
    e.preventDefault();
    const payload = {
      id: id,
      userRating: rating,
    };
    dispatch(editProduct(payload));
  };

  const mouseEnterHandler = index => {
    setIsEdited(true);
    setRating(index);
  };

  const mouseLeaveHandler = index => {
    setIsEdited(false);
    setRating(userRating);
  };

  return (
    <div
      className={!isEdited && !userRating ? `${styles.stars}` : `${styles.userRating}`}
    >
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          href='#'
          onMouseEnter={() => mouseEnterHandler(i)}
          onMouseLeave={mouseLeaveHandler}
          onClick={rateClickHandler}
        >
          {i <= (isEdited ? rating : userRating ? userRating : stars) ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};
ProductRating.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.number,
};

export default ProductRating;
