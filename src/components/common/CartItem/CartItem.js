import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../../../redux/productsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './CartItem.module.scss';
import { editCartProduct, deleteCartProduct } from '../../../redux/cartRedux';

const CartItem = props => {
  const product = useSelector(state => getProductById(state, props.itemId));
  const dispatch = useDispatch();

  const payload = {
    id: props.itemId,
    quantity: props.itemQuantity,
  };

  const handleProductInputChange = quantity => {
    if (quantity > 0 && quantity <= 10) {
      payload.quantity = quantity;
      dispatch(editCartProduct(payload));
    }
  };

  const handleProductDeleteFromCart = () => {
    dispatch(deleteCartProduct(payload));
  };

  return (
    <li className={styles.cartItem}>
      <div className='row'>
        <div className='col-5 px-0'>{product.name}</div>
        <div className='col-3 px-0'>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faPlus}
            onClick={() => handleProductInputChange(props.itemQuantity + 1)}
          />
          <input
            className={styles.input}
            type='number'
            value={props.itemQuantity}
            onChange={e => handleProductInputChange(e.target.value)}
          ></input>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faMinus}
            onClick={() => handleProductInputChange(props.itemQuantity - 1)}
          />
        </div>
        <div className='col-2 px-0 text-center'>
          $ {props.itemQuantity * product.price}
        </div>
        <div className='col-2 px-3'>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faTrash}
            onClick={handleProductDeleteFromCart}
          />
        </div>
      </div>
      <div className={styles.line}></div>
    </li>
  );
};

CartItem.propTypes = {
  itemId: PropTypes.string,
  itemQuantity: PropTypes.number,
};

export default CartItem;
