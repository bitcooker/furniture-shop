/* selectors */
export const getCart = ({ cart }) => cart.products;
export const getCartCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const EDIT_PRODUCT = createActionName('EDIT_PRODUCT');

/* action creators */
export const addCartProduct = payload => ({ payload, type: ADD_PRODUCT });
export const editCartProduct = payload => ({ payload, type: EDIT_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    case EDIT_PRODUCT:
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return statePart;
  }
}
