/**
 *
 * Navigation
 *
 */

import React from 'react';
import { Flex, Box } from 'rebass';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Button from '../Button';
import Logo from '../Logo';

const NavigationBar = styled.div`
  height: 9.174311926605505vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.space};
  border-bottom: #454e5f ${props => props.theme.borders[1]};
  font-weight: ${props => props.theme.fontWeights[1]};
  white-space: nowrap;
`;

function Navigation() {
  return (
    <div>
      <Flex>
        <NavigationBar>
          <Box width={2 / 12}>
            <Logo alt="Hotel Tonight" />
          </Box>
          <Box width={6 / 12} />
          <Box width={2 / 12}>
            <Button label="Sign Up | Sign In" link="/about" prefetch />
          </Box>
        </NavigationBar>
      </Flex>
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;
