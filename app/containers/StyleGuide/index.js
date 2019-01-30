/**
 *
 * StyleGuide
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
import makeSelectStyleGuide from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

//  Components
import PageContainer from '../../components/PageContainer/StyledPageContainer';
import Navigation from '../../components/Navigation';

/* eslint-disable react/prefer-stateless-function */
export class StyleGuide extends React.PureComponent {
  render() {
    return (
      <PageContainer>
        <Helmet>
          <title>Style Guide</title>
          <meta name="description" content="Description of Style Guide" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Navigation />
        <FormattedMessage {...messages.header} />
      </PageContainer>
    );
  }
}

StyleGuide.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  styleGuide: makeSelectStyleGuide(),
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

const withReducer = injectReducer({ key: 'styleGuide', reducer });
const withSaga = injectSaga({ key: 'styleGuide', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StyleGuide);
