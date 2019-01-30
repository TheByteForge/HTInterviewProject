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
  color: #fff;
`;

const RingLoader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: RingLoader 1.2s linear infinite;
  }

  @keyframes RingLoader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function SkeletonLoad() {
  return (
    <LoadPage>
      <RingLoader />
    </LoadPage>
  );
}

SkeletonLoad.propTypes = {};

export default SkeletonLoad;
