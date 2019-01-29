/**
 *
 * SkeletonLoad
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const LoadPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
  background: #000;
  color: red;
`;

function SkeletonLoad() {
  return (
    <LoadPage>
      <FormattedMessage {...messages.header} />
    </LoadPage>
  );
}

SkeletonLoad.propTypes = {};

export default SkeletonLoad;
