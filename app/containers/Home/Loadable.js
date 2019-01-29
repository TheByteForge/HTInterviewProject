/**
 *
 * Asynchronously loads the component for MainPage
 *
 */

import React from 'react';
import loadable from 'loadable-components';
import pMinDelay from 'p-min-delay';
import Loading from '../../components/SkeletonLoad';

export default loadable(() => pMinDelay(import('./index'), 100), {
  LoadingComponent: () => <Loading />,
});
