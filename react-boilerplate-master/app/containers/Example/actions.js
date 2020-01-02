/*
 *
 * Example actions
 *
 */

import { FETCH_SUCCESS, FETCH_REQUEST } from './constants';

/**
 * @return {object}
 */
export const getData = () => {
  return {
    type: FETCH_REQUEST,
  };
}

/**
 * 
 * @param {array} response 
 * @return {object}
 */
export const putData = (response) => {
  return {
    type: FETCH_SUCCESS,
    response,
  };
}
