import { combineReducers } from 'redux';
import nameReducer from './name_reducer';

const reducers = combineReducers({
  name: nameReducer
});

export default reducers;
