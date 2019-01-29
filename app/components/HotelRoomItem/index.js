/**
 *
 * HotelRoomItem
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Flex } from 'rebass';
import messages from './messages';

const StyledRoomItem = styled.div`
  background-color: grey;
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
`;

/* eslint-disable react/prefer-stateless-function */
class HotelRoomItem extends React.Component {
  render() {
    return (
      <Flex>
        <StyledRoomItem>
          <FormattedMessage {...messages.header} />
        </StyledRoomItem>
      </Flex>
    );
  }
}

HotelRoomItem.propTypes = {};

export default HotelRoomItem;
