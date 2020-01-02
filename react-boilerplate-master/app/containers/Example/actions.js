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
  }
}

/**
 * 
 * @param {array} response 
 * @return {object}
 */
export const putData = (response) => {
  console.log(`Saga has passed this response ${response}`)
  return {
    type: FETCH_SUCCESS,
    payload: response,
  }
}


