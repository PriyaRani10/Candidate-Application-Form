import { combineReducers } from 'redux';
// import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA_SUCCESS,FILTER_DATA_SUCCESS, IS_FILTERED } from './TaskActions';

const initialState={
  data:[1,2,3],
  filterData:[]
}
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload;
    case FILTER_DATA_SUCCESS:
      
      return action.payload;
    case IS_FILTERED:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  data: dataReducer
});