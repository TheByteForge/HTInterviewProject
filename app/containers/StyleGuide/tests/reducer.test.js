import { fromJS } from 'immutable';
import styleGuideReducer from '../reducer';

describe('styleGuideReducer', () => {
  it('returns the initial state', () => {
    expect(styleGuideReducer(undefined, {})).toEqual(fromJS({}));
  });
});
