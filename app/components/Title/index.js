/**
 *
 * Title
 *
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const StyledTitle = styled.h1`
  color: ${props => {
    if (props.primary) return props.theme.colors.primary;
    if (props.secondary) return props.theme.colors.secondary;
    return props.theme.colors.text;
  }};
  font-size: ${props => {
    if (props.xl) return props.theme.fontSize.xl;
    if (props.lg) return props.theme.fontSize.lg;
    if (props.md) return props.theme.fontSize.md;
    if (props.sm) return props.theme.fontSize.sm;
    return props.theme.fontSize.nm;
  }};
  font-weight: ${props => (props.thin ? 'normal' : 'bold')};
  text-transform: ${props => {
    if (props.capitalize) return 'capitalize';
    if (props.uppercase) return 'uppercase';
    return 'none';
  }};
`;

function Title() {
  return (
    <StyledTitle primary lg>
      <FormattedMessage />
    </StyledTitle>
  );
}

Title.propTypes = {};

export default Title;
