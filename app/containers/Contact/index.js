/**
 *
 * Contact
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
import makeSelectContact from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Imported Components
import PageContainer from '../../components/PageContainer/StyledPageContainer';
import Navigation from '../../components/Navigation';

/* eslint-disable react/prefer-stateless-function */
export class Contact extends React.PureComponent {
  render() {
    return (
      <PageContainer>
        <Helmet>
          <title>Contact</title>
          <meta name="description" content="Description of Contact" />
        </Helmet>
        <Navigation />

        <FormattedMessage {...messages.header} />
      </PageContainer>
    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
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

const withReducer = injectReducer({ key: 'contact', reducer });
const withSaga = injectSaga({ key: 'contact', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Contact);