/**
 *
 * RoomCta
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ListTitle = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights[5]};
  overflow: hidden;
`;

const List = styled.ul`
  color: ${props => props.theme.colors.price};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: 0.75rem;
  overflow: hidden;

  li {
    &:hover {
      text-decoration: underline;
    }
  }
`;

function RoomCta() {
  return (
    <div>
      <ListTitle>More Amazing Deals In:</ListTitle>
      <List>
        <li>
          <FormattedMessage {...messages.location1} />
        </li>
        <li>
          <FormattedMessage {...messages.location2} />
        </li>
        <li>
          <FormattedMessage {...messages.location3} />
        </li>
        <li>
          <FormattedMessage {...messages.location4} />
        </li>
      </List>
    </div>
  );
}

RoomCta.propTypes = {};

export default RoomCta;
