/**
 *
 * Image.js
 *
 * Renders an image, enforcing the usage of the alt tag
 */

import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  return (
    <img
      className={props.className}
      src={props.small}
      srcSet={`
        ${props.small} 300w, 
        ${props.medium} 768w, 
        ${props.large} 1280w, 
        ${props.xlarge} 3200w`}
      sizes="100vw"
      alt={props.alt}
    />
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  // srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  // src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
  xlarge: PropTypes.string,
};

export default Img;
