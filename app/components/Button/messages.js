/*
 * Button Messages
 *
 * This contains all the text for the Button component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Button';

export default defineMessages({
  default: {
    id: `${scope}.default`,
    defaultMessage: 'Default',
  },
  home: {
    id: `${scope}.default`,
    defaultMessage: 'Default',
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
