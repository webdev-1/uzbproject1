/**
 * Auth selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.auth || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectAuth,
    user => authState.user,
  );

export { selectAuth, makeSelectUsername };

const makeSelectLoading = () =>
  createSelector(
    selectAuth,
    loading => authState.loading,
  );

export {makeSelectLoading };

const makeSelectLoggedIn = () =>
  createSelector(
    selectAuth,
    loggedIn => authState.loggedIn,
  );

export {makeSelectLoggedIn };

const makeSelectMessage = () =>
  createSelector(
    selectAuth,
    message => authState.user,
  );

export { makeSelectMessage };

