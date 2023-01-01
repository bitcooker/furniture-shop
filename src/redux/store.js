import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import feedbackReducer from './feedbackRedux';
import promoReducer from './promoRedux';
import rwdReducer from './rwdModeRedux';
import brandsReducer from './brandsRedux';
import currencyReducer from './currencyRedux';
import tagsReducer from './tagsRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  feedback: feedbackReducer,
  promo: promoReducer,
  rwdMode: rwdReducer,
  brands: brandsReducer,
  currency: currencyReducer,
  tags: tagsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
