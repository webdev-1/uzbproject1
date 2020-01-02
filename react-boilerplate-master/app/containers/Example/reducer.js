/*
 *
 * Example reducer
 *
 */
import produce from 'immer';
import { FETCH_SUCCESS, FETCH_REQUEST } from './constants';

export const initialState = {
  users: [],
};

/* eslint-disable default-case, no-param-reassign */
const exampleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_REQUEST:
        break;
      case FETCH_SUCCESS:
        console.log(`Action "putData" has sent ${action.payload}`);
        draft.users = action.payload;
        break;
    }
    return draft;
  });

export default exampleReducer;