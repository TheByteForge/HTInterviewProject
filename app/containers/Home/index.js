/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
// import { Box, Card, Heading, Text } from 'rebass';
// import Anime from 'react-anime';
import styled, { keyframes } from 'styled-components';
import messages from './messages';

//  Components
import PageContainer from '../../components/PageContainer/StyledPageContainer';
import Navigation from '../../components/Navigation';

const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const HomePageElm = styled.div`
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;

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

        <HomePageElm>
          <h1>HomeElm</h1>
        </HomePageElm>

        {/* <Anime opacity={[0.2, 1]} translateY={[-100, 0]}>
          <h1>Anime.js Test Works!</h1>
        </Anime> */}
        <FormattedMessage {...messages.header} />
      </PageContainer>
    );
  }
}
