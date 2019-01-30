/**
 *
 * HotelRoomItem
 *
 */
// import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Flex, Box } from 'rebass';
import messages from './messages';

// Components
import hotel1 from '../../images/Hotel-Rooms/hotel-bartlett.jpg';
import Img from '../Img';

// Component Styles
import StyledRoomItem from './StyledRoomItem';
import TextOverlay from './TextOverlay';
import BasicTag from './BasicTag';
import SameDayTag from './SameDayTag';
import Price from './Price';
import DiscountedPrice from './DiscountedPrice';
import LikeBox from './LikeBox';
import Distance from './Distance';
import HotelTitle from './HotelTitle';
import Percentage from './Percentage';

/* eslint-disable react/prefer-stateless-function */
class HotelRoomItem extends React.Component {
  render() {
    return (
      <Flex>
        <Box mb={2}>
          <StyledRoomItem>
            <TextOverlay>12 People Viewing This Hotel.</TextOverlay>

            <Img src={hotel1} />

            <Flex justifyContent="space-between">
              <BasicTag>Basic</BasicTag>
              <SameDayTag>Same Day Deal</SameDayTag>
            </Flex>

            <Flex flexDirection="row">
              <Box px={3}>
                <HotelTitle>
                  <FormattedMessage
                    {...messages.hotelMessage}
                    values={{
                      hotel: 'The Bartlett Hotel',
                    }}
                  />
                </HotelTitle>

                <LikeBox>
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    width="4%"
                    height="4%"
                  >
                    <g>
                      <path
                        fill="#aaaaaa"
                        d="M0,24 L4.36363636,24 L4.36363636,9.6 L0,9.6 L0,24 Z M24,10.8 C24,9.48 23.0181818,8.4 21.8181818,8.4 L14.9345455,8.4 L15.9709091,2.916 L16.0036364,2.532 C16.0036364,2.04 15.8181818,1.584 15.5236364,1.26 L14.3672727,0 L7.18909091,7.908 C6.78545455,8.34 6.54545455,8.94 6.54545455,9.6 L6.54545455,21.6 C6.54545455,22.92 7.52727273,24 8.72727273,24 L18.5454545,24 C19.4509091,24 20.2254545,23.4 20.5527273,22.536 L23.8472727,14.076 C23.9454545,13.8 24,13.512 24,13.2 L24,10.908 L24,10.8 Z"
                      />
                    </g>
                  </svg>
                  <Box pl={2} pr={1}>
                    <Percentage>75%</Percentage>
                  </Box>
                  |
                  <Box px={1}>
                    <Distance>7.1 Mile Union Square</Distance>
                  </Box>
                </LikeBox>
              </Box>

              <Box px={3}>
                <DiscountedPrice>$68</DiscountedPrice>
                <Price>Was $205</Price>
              </Box>
            </Flex>
          </StyledRoomItem>
        </Box>
      </Flex>
    );
  }
}

HotelRoomItem.propTypes = {};

export default HotelRoomItem;
