/*
 *
 * Example actions
 *
 */

import { FETCH_SUCCESS } from './constants';

export function defaultAction(username) {
  return {
    type: FETCH_SUCCESS,
    username, 
  };
}
