import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the styleGuide state domain
 */

const selectStyleGuideDomain = state => state.get('styleGuide', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by StyleGuide
 */

const makeSelectStyleGuide = () =>
  createSelector(selectStyleGuideDomain, substate => substate.toJS());

export default makeSelectStyleGuide;
export { selectStyleGuideDomain };
