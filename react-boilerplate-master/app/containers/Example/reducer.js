/*
 *
 * Example reducer
 *
 */
import produce from 'immer';
import { FETCH_SUCCESS} from './constants';

export const initialState = {
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const exampleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_SUCCESS:
        draft.username = action.username;
        break;
    }
  });

export default exampleReducer;
