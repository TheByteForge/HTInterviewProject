/**
 *
 * RoomCta
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
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
  list-style: none;
  line-height: ${props => props.theme.lineHeights.normal};

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
      <Flex flexDirection="row">
        <Box>
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
            <li>
              <FormattedMessage {...messages.location5} />
            </li>
          </List>
        </Box>
        <Box pl={5}>
          <List>
            <li>
              <FormattedMessage {...messages.location6} />
            </li>
            <li>
              <FormattedMessage {...messages.location7} />
            </li>
            <li>
              <FormattedMessage {...messages.location8} />
            </li>
            <li>
              <FormattedMessage {...messages.location9} />
            </li>
            <li>
              <FormattedMessage {...messages.location10} />
            </li>
          </List>
        </Box>
      </Flex>
    </div>
  );
}

RoomCta.propTypes = {};

export default RoomCta;
