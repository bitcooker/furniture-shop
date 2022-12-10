/* selectors */
export const getAll = ({ comparedProducts }) => comparedProducts;

/* action name creator */
const reducerName = 'comparedProducts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

/* action creators */
export const addComparedProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeComparedProduct = payload => ({ payload, type: REMOVE_PRODUCT });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      if (statePart.length > 4) {
        return statePart;
      }

      if (
        statePart.some(product => (product.id === action.payload.id ? true : false))
      ) {
        return statePart;
      } else {
        return [...statePart, action.payload];
      }

    case REMOVE_PRODUCT:
      return statePart.filter(product =>
        product.id === action.payload.id ? false : true
      );
    default:
      return statePart;
  }
}
