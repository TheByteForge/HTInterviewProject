/**
 *
 * Asynchronously loads the component for Image
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
