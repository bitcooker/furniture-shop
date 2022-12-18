import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getAllCurrency,
  getSelectedCurrency,
  changeCurrency,
} from '../../../redux/currencyRedux';

const CurrencySelector = () => {
  const dispatch = useDispatch();
  const allCurrency = useSelector(state => getAllCurrency(state));
  const selectedCurrency = useSelector(state => getSelectedCurrency(state));

  const handleCurrencyChange = currency => {
    if (currency.id !== selectedCurrency.id) {
      const payload = {
        previousCurrency: selectedCurrency.id,
        newCurrency: currency.id,
      };
      dispatch(changeCurrency(payload));
    }
  };

  return (
    <>
      {allCurrency.map(currency => (
        <li key={currency.id} onClick={() => handleCurrencyChange(currency)}>
          {currency.id}
        </li>
      ))}
    </>
  );
};

export default CurrencySelector;
