import { SET_NAME } from 'actions';

export default function (state = '', action) {
  switch (action.type) {
    case SET_NAME:
      return action.payload.name;
    default:
      return state;
  }
}
