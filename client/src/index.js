import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Redux-Thunk allows us to write action creators witthout
// having to immediately return an action.
//Redux-Thunk givs us direct access to the dispatch function
// this allows us to manually dispatch an action at anytime.
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';

// Development REST Clienttemp test code
import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

console.log('STRIPE KEY IS: ', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is: ', process.env.NODE_ENV);
