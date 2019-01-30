/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Anime from 'react-anime';
import styled from 'styled-components';
import messages from './messages';

import Navigation from '../../components/Navigation';
import NotFoundContainer from './NotFoundContainer';

const NotFoundTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.text};
  h1 {
    font-size: 6rem;
    color: ${props => props.theme.colors.text};
  }
  h2 {
    font-size: 2rem;
    color: ${props => props.theme.tags.basic};
  }
`;

const Text = styled.div`
  background-color: ${props => props.theme.colors.text};
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
`;
const Secondary = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
`;
const Tertiary = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
`;

// import styled, { keyframes } from 'styled-components';

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

const node = document.getElementById('NotFound');

export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Page Not Found</title>
          <meta name="description" content="Error Page Could Not Be Found" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Navigation />
        <NotFoundContainer>
          <NotFoundTitle>
            <Anime
              opacity={[0, 1]}
              translateY={[-100, 0]}
              delay={(el, index) => index * 240}
            >
              <h1>OH NO!</h1>
              <h2>We Couldnt Find That Page</h2>
            </Anime>
            <FormattedMessage {...messages.header} />
          </NotFoundTitle>
          {/* <HomePageElm>
           <h1>HomeElm</h1>
         </HomePageElm> */}

          <Anime
            easing="easeOutElastic"
            loop
            duration={2000}
            direction="alternate"
            delay={(el, index) => index * 240}
            translateY={['-10vh', '10vh']}
            scale={[0.25, 0.5]}
            opacity={[0.1, 1]}
          >
            <Text />
            <Secondary />
            <Tertiary />
          </Anime>
          {node}
        </NotFoundContainer>
      </div>
    );
  }
}
