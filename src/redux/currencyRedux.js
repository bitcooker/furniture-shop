/* selectors */
export const getAllCurrency = ({ currency }) => currency;

export const getSelectedCurrency = ({ currency }) =>
  currency.find(item => item.isSelected === true);

/* action name creator */
const reducerName = 'currency';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_CURRENCY = createActionName('CHANGE_CURRENCY');

/* action creators */
export const changeCurrency = payload => ({ payload, type: CHANGE_CURRENCY });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return statePart
        .map(currency =>
          currency.id === action.payload.previousCurrency
            ? { ...currency, isSelected: false }
            : currency
        )
        .map(currency =>
          currency.id === action.payload.newCurrency
            ? { ...currency, isSelected: true }
            : currency
        );
    }
    default:
      return statePart;
  }
}
