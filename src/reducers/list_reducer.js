import { ADD_ITEM, REMOVE_ITEM, DELETE_ALL, EDIT_ITEM } from 'actions';
import _ from 'lodash';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload.item];
    case EDIT_ITEM:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, content: action.payload.content };
        }
        return item;
      });
    case REMOVE_ITEM:
      return _.reject(state, {id: action.payload.id});
    case DELETE_ALL:
      return [];
    default:
      return state;
  }
}
