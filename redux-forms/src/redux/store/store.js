/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// para o segundo parâmetro da createStore, também é possível
// usar o composeWithDevTools from 'redux-devtools-extension'
export default store;
