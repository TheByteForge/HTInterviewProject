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
import styled from 'styled-components';

// Components
import Selectrix from 'react-selectrix';
import Button from '../Button';
import Logo from '../Logo';

// StyledComponents
import NavigationBar from './NavigationBar';

const SelectrixStyled = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: row;
`;

function Navigation() {
  return (
    <div>
      <Flex>
        <NavigationBar>
          <Box width={2 / 12}>
            <Logo alt="Hotel Tonight" />
          </Box>
          <Box width={6 / 12}>
            <SelectrixStyled>
              <Selectrix
                placeholder="Where:"
                customScrollbar
                materialize
                options={[
                  {
                    key: 'popular',
                    label: 'Popular',
                  },
                  {
                    key: 'napa',
                    label: 'Napa, CA',
                  },
                  {
                    key: 'sonoma',
                    label: 'Sonoma, CA',
                  },
                  {
                    key: 'losangeles',
                    label: 'Los Angeles',
                  },
                  {
                    key: 'newyork',
                    label: 'New York, NY',
                  },
                  {
                    key: 'monterey',
                    label: 'Monterey, CA',
                  },
                  {
                    key: 'lasvegas',
                    label: 'Las Vegas, Strip - NV',
                  },
                  {
                    key: 'santacruz',
                    label: 'Santa Cruz, CA',
                  },
                  {
                    key: 'laketahoe',
                    label: 'Lake Tahoe',
                  },
                  {
                    key: 'seattle',
                    label: 'Seattle',
                  },
                ]}
                onChange={value => console.log(value)}
              />
            </SelectrixStyled>
          </Box>
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
