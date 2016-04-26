import { combineReducers } from 'redux';
import listReducer from './list_reducer';

const reducers = combineReducers({
  list: listReducer
});

export default reducers;
