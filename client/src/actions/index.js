import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  //redux-thunk will automatically call the return function and pass in the dispatch function
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
