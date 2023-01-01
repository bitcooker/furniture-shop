import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../common/Button/Button';
import { useProductsAction } from '../../../../hooks/use-Product-action';

const NewFurnitureProductButtons = props => {
  const { cartAction } = useProductsAction();

  const addToCart = e => {
    e.preventDefault();
    cartAction(props.id);
  };

  return (
    <>
      <Button variant='small'>Quick View</Button>
      <Button variant='small' onClick={addToCart}>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
      </Button>
    </>
  );
};

NewFurnitureProductButtons.propTypes = {
  id: PropTypes.string,
};

export default NewFurnitureProductButtons;
