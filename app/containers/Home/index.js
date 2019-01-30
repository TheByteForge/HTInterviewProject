/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. 
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
// import { Box, Card, Heading, Text } from 'rebass';

// An image placeholder for google map
import tempMap from '../../images/Maps/google-maps-placeholder.png';

//  Components
import PageContainer from '../../components/PageContainer/StyledPageContainer';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import HotelRoomItem from '../../components/HotelRoomItem';
import RoomCTA from '../../components/RoomCta';

const HotelRoomContainer = styled.div`
  overflow-y: scroll;
  max-height: 75vh;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MapContainer = styled.div`
  max-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.tertiary};
  background-image: url(${tempMap});
  background-position: left center;
  background-size: cover;
`;

// import ResponsiveImage from '../../components/Img';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Flex justifyContent="center">
        <PageContainer>
          <Helmet>
            <title>Home</title>
            <meta name="description" content="Description of Home" />
          </Helmet>

          <Navigation />

          <Flex>
            <Box py={2} width={1}>
              <Title>Top Deals In San Francisco, CA</Title>
            </Box>
          </Flex>

          <Flex justifyContent="center">
            <Box pr={2} pb={4} width={[6 / 12, 6 / 12, 6 / 12, 3 / 12]}>
              <HotelRoomContainer>
                <HotelRoomItem />
                <HotelRoomItem />
                <HotelRoomItem />
                <HotelRoomItem />
                <HotelRoomItem />
                <HotelRoomItem />
                <RoomCTA />
              </HotelRoomContainer>
            </Box>

            <Box pl={2} pb={4} width={[6 / 12, 6 / 12, 6 / 12, 9 / 12]}>
              <MapContainer>Map Here</MapContainer>
            </Box>
          </Flex>

          {/* //SRCSet Example
          <ResponsiveImage
            small="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg"
            medium="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_768.jpg"
            large="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_1280.jpg"
            xlarge="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_3200.jpg"
            alt="Hotel Chancellor"
          /> */}
        </PageContainer>
      </Flex>
    );
  }
}
