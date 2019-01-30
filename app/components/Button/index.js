/**
 *
 * Button
 * ------------------------------------------------------------------------------------------------
 * A button with default styling to be applied site-wide for things such as nav (why the button
 * is currently pre-fetched) links, etc. In a case where I have more time I would typically have a
 * base button style such as this and then extend it or adapt it based on props to fit the needs of
 * other buttons across the site.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

function Button(props) {
  return (
    <Link to={props.link}>
      <PrimaryButton prefetch>
        {props.label}
        {/* <FormattedMessage {...messages.header} /> */}
      </PrimaryButton>
    </Link>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
