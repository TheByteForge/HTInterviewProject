/**
 *
 * Asynchronously loads the component for MediaQueries
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
