/*
 *
 * Example actions
 *
 */

import { FETCH_SUCCESS, FETCH_REQUEST } from './constants';

export const getUsers = (response) => {
  return {
    type: FETCH_SUCCESS,
    payload: response, 
  };
}

export const request_data = () => {
  return {
    type: FETCH_REQUEST,
  };
}