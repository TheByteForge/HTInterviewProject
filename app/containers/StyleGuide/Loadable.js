/**
 *
 * Asynchronously loads the component for StyleGuide
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
