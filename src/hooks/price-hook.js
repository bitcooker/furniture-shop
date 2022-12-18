import { useSelector } from 'react-redux';
import { getSelectedCurrency } from '../redux/currencyRedux';

export const useShowPrice = price => {
  const selectedCurrency = useSelector(state => getSelectedCurrency(state));
  price = Math.round(price * selectedCurrency.rate);
  let priceToShow;
  if (selectedCurrency.id !== 'PLN') {
    priceToShow = `${selectedCurrency.sign} ${price}`;
  } else {
    priceToShow = `${price} ${selectedCurrency.sign}`;
  }
  return priceToShow;
};
