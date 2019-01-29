/**
 *
 * Button
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
