import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the example state domain
 */

const selectExampleDomain = state => state.example || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Example
 */

const getUsers = () =>
  createSelector(
    selectExampleDomain,
    substate => substate.users,
  );

const getLoadingState = () => 
    createSelector(
      selectExampleDomain,
      substate => substate.loading,
    );

export default { getUsers, getLoadingState };
export { selectExampleDomain };
