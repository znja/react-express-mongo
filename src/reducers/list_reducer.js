import { GET_LIST, ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from 'actions';
import _ from 'lodash';

export default function (state = [], { type, payload }) {
  switch (type) {
    case GET_LIST:
      return [...state, ...payload.data];
    case ADD_ITEM:
      return [...state, payload.data];
    case REMOVE_ITEM:
      return _.reject(state, { _id: payload.id });
    case EDIT_ITEM: {
      const newState = state.map((item) => {
        if (item._id === payload.data._id) {
          return payload.data;
        }
        return item;
      });
      console.log(newState);
      return state;
    }
    default:
      return state;
  }
}
