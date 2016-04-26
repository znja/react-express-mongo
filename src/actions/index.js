import axios from 'axios';

/*
 * USE Flux Standard Action:
 * MUST return a JS object and have a type property
 * MAY contain a error, payload or/and meta
 * NO other properties than mention should be return from action
*/
export const GET_LIST = 'GET_LIST';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function getList() {
  const request = axios.get('api/list');
  return {
    type: GET_LIST,
    payload: request
  };
}

export function addItem(item) {
  const request = axios.post('api/list', item);
  return {
    type: ADD_ITEM,
    payload: request
  };
}

export function removeItem(id) {
  const request = axios.delete(`api/list/${id}`);
  return {
    type: REMOVE_ITEM,
    payload: { request, id }
  };
}
