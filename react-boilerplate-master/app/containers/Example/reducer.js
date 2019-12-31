/*
 *
 * Example reducer
 *
 */
import produce from 'immer';
import { FETCH_SUCCESS, FETCH_REQUEST } from './constants';

export const initialState = {
  users: [],
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const exampleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_REQUEST:
        draft.loading = true; 
      case FETCH_SUCCESS:
        draft.users = action.payload;
        draft.loading = false;
        break;
    }
    return draft;
  });

export default exampleReducer;