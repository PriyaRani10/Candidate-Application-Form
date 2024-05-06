import { combineReducers } from 'redux';
import { FETCH_DATA_SUCCESS } from './TaskActions';

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer
});