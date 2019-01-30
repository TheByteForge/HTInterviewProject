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
// import { Box, Card, Heading, Text } from 'rebass';
// import Anime from 'react-anime';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

//  Components
import PageContainer from '../../components/PageContainer/StyledPageContainer';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import HotelRoomItem from '../../components/HotelRoomItem';

const HotelRoomContainer = styled.div`
  overflow-y: scroll;
  max-height: 60vh;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MapContainer = styled.div`
  max-height: 60vh;
  width: 100%;
  height: 100%;
  background: darkgrey;
`;

// import ResponsiveImage from '../../components/Img';

// const slideInLeft = keyframes`
//   from {
//     -webkit-transform: translate3d(-100%, 0, 0);
//     transform: translate3d(-100%, 0, 0);
//     visibility: visible;
//   }

//   to {
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// `;
// const slideOutLeft = keyframes`
//   from {
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }

//   to {
//     visibility: hidden;
//     -webkit-transform: translate3d(-100%, 0, 0);
//     transform: translate3d(-100%, 0, 0);
//   }
// `;

// const HomePageElm = styled.div`
//   &.page-enter {
//     animation: ${slideInLeft} 0.2s forwards;
//   }
//   &.page-exit {
//     animation: ${slideOutLeft} 0.2s forwards;
//   }
// `;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <PageContainer>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>

        <Navigation />

        <Flex>
          <Box p={4} width={1}>
            <Title>Top Deals In San Francisco, CA</Title>
          </Box>
        </Flex>

        <Flex>
          <Box pr={2} pl={4} py={4} width={[6 / 12, 6 / 12, 4 / 12]}>
            <HotelRoomContainer>
              <HotelRoomItem />
              <HotelRoomItem />
              <HotelRoomItem />
              <HotelRoomItem />
              <HotelRoomItem />
              <HotelRoomItem />
            </HotelRoomContainer>
          </Box>
          <Box pr={4} pl={2} py={4} width={[6 / 12, 6 / 12, 8 / 12]}>
            <MapContainer>Map Here</MapContainer>
          </Box>
        </Flex>
        {/* <ResponsiveImage
            small="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg"
            medium="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_768.jpg"
            large="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_1280.jpg"
            xlarge="https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_3200.jpg"
            alt="Hotel Chancellor"
          /> */}

        {/* <HomePageElm>
          <h1>HomeElm</h1>
        </HomePageElm> */}

        {/* <Anime opacity={[0.2, 1]} translateY={[-100, 0]}>
          <h1>Anime.js Test Works!</h1>
        </Anime> */}
      </PageContainer>
    );
  }
}
