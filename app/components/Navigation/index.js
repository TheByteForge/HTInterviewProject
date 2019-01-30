/**
 *
 * Navigation
 * ------------------------------------------------
 * A navigation system using react-router.
 * Typically more time would be invested into making this
 * component handle routing for the website's container "pages".
 *
 */

import React from 'react';
import { Flex, Box } from 'rebass';

// Components
import Button from '../Button';
import Logo from '../Logo';

// StyledComponents
import NavigationBar from './NavigationBar';

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
