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


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
