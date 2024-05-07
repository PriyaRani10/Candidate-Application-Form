import { createStore } from 'redux';
import reducers from './TaskReducer';

const store = createStore(reducers);

export default store;