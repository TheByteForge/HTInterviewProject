/*
 * HomePage
 * ---------------------------------------------------------------------
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. 
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Flex, Box } from 'rebass';
// import tempMap from '../../images/Maps/google-maps-placeholder.png';

//  Components
import PageContainer from '../../components/PageContainer/StyledPageContainer';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import HotelRoomItem from '../../components/HotelRoomItem';
import RoomCTA from '../../components/RoomCta';
import GoogleMaps from '../../components/GoogleMaps';
import HotelRoomContainer from './HotelRoomContainer';
import MapContainer from './MapContainer';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Flex justifyContent="center">
        <PageContainer>
          <Helmet>
            <title>Hotel Tonight</title>
            <meta name="description" content="Description of Home" />
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="application-name" content="Hotel Tonight App" />
            <meta name="theme-color" content="#674C8D" />

            <meta name="robots" content="index,follow" />
            <meta
              httpEquiv="set-cookie"
              content="name=value; expires=date; path=url"
            />
            {/* Facebook Open Graph */}
            <meta property="fb:app_id" content="123456789" />
            <meta property="og:url" content="https://hoteltonight.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Hotel Tonight WebApp" />
            <meta
              property="og:image"
              content="https://pbs.twimg.com/profile_images/750819366367666176/P-I61Dec_400x400.jpg"
            />
            <meta
              property="og:description"
              content="Welcome to Hotel Tonight's Premium Non Existent Web Application by Zack!"
            />
            <meta property="og:site_name" content="Hotel Tonight" />
            <meta property="og:locale" content="en_US" />
            {/* Twitter Card */}
            <meta
              name="twitter:card"
              content="Welcome to Hotel Tonight's Premium Non Existent Web Application by Zack!"
            />
            <meta name="twitter:site" content="@hoteltonight" />
            <meta name="twitter:url" content="https://hoteltonight.com" />
            <meta name="twitter:title" content="Hotel Tonight Web App" />
            <meta
              name="twitter:description"
              content="Hotel Tonight Mobile WebApplication"
            />
            <meta
              name="twitter:image"
              content="https://example.com/image.jpg"
            />
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
              <MapContainer>
                <GoogleMaps />
              </MapContainer>
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
