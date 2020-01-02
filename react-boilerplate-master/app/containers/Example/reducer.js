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

const exampleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_REQUEST:
        break;
      case FETCH_SUCCESS:
        draft.users = action.response;
        break;
    }
    return draft;
  });

export default exampleReducer;
