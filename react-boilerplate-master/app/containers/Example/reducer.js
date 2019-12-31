/*
 *
 * Example reducer
 *
 */
import produce from 'immer';
import { FETCH_SUCCESS } from './constants';

export const initialState = {
  users: [],
};

/* eslint-disable default-case, no-param-reassign */
export const fetchUsersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_SUCCESS:
        draft.users = action.response;
        break;
    }
    return draft;
  });

