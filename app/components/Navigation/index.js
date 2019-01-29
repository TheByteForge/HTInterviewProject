/**
 *
 * Navigation
 *
 */

import React from 'react';
import { Flex } from 'rebass';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

const NavigationBar = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: darkgrey;
  position: fixed;
  top: 0;
  left: 0;
`;

function Navigation() {
  return (
    <Flex>
      <NavigationBar>
        <Button label="Home" link="/" prefetch />
        <Button label="About" link="/about" prefetch />
        <Button label="Style Guide" link="/styleguide" prefetch />
        <Button label="Contact" link="/contact" prefetch />
      </NavigationBar>
    </Flex>
  );
}

Navigation.propTypes = {};

export default Navigation;
