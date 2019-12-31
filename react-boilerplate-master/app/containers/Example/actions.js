/*
 *
 * Example actions
 *
 */

import { FETCH_SUCCESS } from './constants';

export const getUsers = () => {
  return {
    type: FETCH_SUCCESS,
    payload: response, 
  };
}
