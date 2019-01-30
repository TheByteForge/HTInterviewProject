/**
 *
 * Title
 * ------------------------------------------
 * A general purpose title component for creating titles
 * pass in props to determine and modify things like the color, font size, and font weight.
 * In a situation with more time I would have added more configurations than just for h1's
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// Styled Components
import StyledTitle from './StyledTitle';

function Title() {
  return (
    <StyledTitle>
      <FormattedMessage {...messages.topdeals} />
    </StyledTitle>
  );
}

Title.propTypes = {};

export default Title;
