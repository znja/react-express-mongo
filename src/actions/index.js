/*
 * USE Flux Standard Action:
 * MUST return a JS object and have a type property
 * MAY contain a error, payload or/and meta
 * NO other properties than mention should be return from action
*/

export const SET_NAME = 'SET_NAME';


export function setName(name) {
  return {
    type: SET_NAME,
    payload: { name }
  };
}
