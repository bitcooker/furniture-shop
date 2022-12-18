import { useDispatch, useSelector } from 'react-redux';
import { editProduct, getComparedProducts } from '../redux/productsRedux';
import { getCart, addCartProduct, editCartProduct } from '../redux/cartRedux';

export const useProductsAction = product => {
  const dispatch = useDispatch();
  const products = useSelector(state => getComparedProducts(state));
  const cart = useSelector(state => getCart(state));

  const favoriteAction = product => {
    const payload = {
      id: product.id,
      isFavorite: !product.isFavorite,
    };
    dispatch(editProduct(payload));
  };

  const compareAction = product => {
    const comparedProductNumberMoreThenFour = products.length > 3 ? true : false;
    if (!comparedProductNumberMoreThenFour) {
      const payload = {
        id: product.id,
        isCompared: !product.isCompared,
      };
      dispatch(editProduct(payload));
    }
  };

  const cartAction = productId => {
    const cartItem = cart.find(product => product.id === productId);
    if (cartItem) {
      const payload = {
        id: productId,
        quantity: cartItem.quantity + 1,
      };
      dispatch(editCartProduct(payload));
    } else {
      const payload = {
        id: productId,
        quantity: 1,
      };
      dispatch(addCartProduct(payload));
    }
  };

  return { favoriteAction, compareAction, cartAction };
};
