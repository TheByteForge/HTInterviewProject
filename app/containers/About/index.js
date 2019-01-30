/**
 *
 * About
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import styled, { keyframes } from 'styled-components';
import makeSelectAbout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Component Imports
import Navigation from '../../components/Navigation';
// import GoogleMaps from '../../components/GoogleMaps';
import NotFoundPageContainer from '../NotFoundPage/NotFoundContainer';

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const AboutPageElm = styled.div`
  background-color: #90caf9;
  &.page-enter {
    animation: ${slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export class About extends React.PureComponent {
  render() {
    return (
      <div>
        <NotFoundPageContainer>
          <Helmet>
            <title>SignUp | Sign In</title>
            <meta
              name="description"
              content="Description of Sign Up / Sign In Page"
            />
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>

          <Navigation />

          <FormattedMessage {...messages.header} />

          {/* <GoogleMaps /> */}
        </NotFoundPageContainer>
        <AboutPageElm />
      </div>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  about: makeSelectAbout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'about', reducer });
const withSaga = injectSaga({ key: 'about', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(About);
