/**
 *
 * Logo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HotelTonightLogo from '../../images/Logo/HT-White-Transparent.png';

const LogoImage = styled.img`
  width: ${props => props.width || '30%'};
  height: ${props => props.height || 'auto'};
`;

function Logo(props) {
  return (
    <a href="/" prefetch="true">
      <LogoImage
        src={HotelTonightLogo}
        className={props.className}
        alt={props.alt}
      />
    </a>
  );
}

Logo.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Logo;
