/*
 * Navigation Messages
 *
 * This contains all the text for the Navigation component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Navigation';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  styleguide: {
    id: `${scope}.styleguide`,
    defaultMessage: 'StyleGuide',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
});
