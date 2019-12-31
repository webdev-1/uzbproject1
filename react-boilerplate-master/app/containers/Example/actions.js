/*
 *
 * Example actions
 *
 */

import { FETCH_SUCCESS } from './constants';

export const getUsers =(payload) => {
  return {
    type: FETCH_SUCCESS,
    payload: response, 
  };
}
