import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../../common/Button/Button';

const NewFurnitureProductButtons = () => {
  return (
    <>
      <Button variant='small'>Quick View</Button>
      <Button variant='small'>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
      </Button>
    </>
  );
};
export default NewFurnitureProductButtons;
