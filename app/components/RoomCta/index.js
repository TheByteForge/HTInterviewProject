/**
 *
 * RoomCta
 * ----------------------------------------
 * A call to action section for listing locations at the bottom of
 * scrollable hotel list. In interest of time I just made two seperate mapped lists
 * however, there is probably a better way where only one list would be needed.
 *
 */

import React from 'react';
import { Flex, Box } from 'rebass';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// Styled Components
import ListTitle from './ListTitle';
import List from './List';

const locations = [
  <FormattedMessage {...messages.location1} />,
  <FormattedMessage {...messages.location2} />,
  <FormattedMessage {...messages.location3} />,
  <FormattedMessage {...messages.location4} />,
  <FormattedMessage {...messages.location5} />,
];

const locations2 = [
  <FormattedMessage {...messages.location6} />,
  <FormattedMessage {...messages.location7} />,
  <FormattedMessage {...messages.location8} />,
  <FormattedMessage {...messages.location9} />,
  <FormattedMessage {...messages.location10} />,
];

const locationListCol1 = locations.map((location, index) => (
  <li key={index}>{location}</li> // eslint-disable-line
));
const locationListCol2 = locations2.map((location2, index) => (
  <li key={index}>{location2}</li> // eslint-disable-line
));

function RoomCta() {
  return (
    <div>
      <ListTitle>More Amazing Deals In:</ListTitle>
      <Flex flexDirection="row">
        <Box>
          <List>{locationListCol1}</List>
        </Box>
        <Box pl={5}>
          <List>{locationListCol2}</List>
        </Box>
      </Flex>
    </div>
  );
}

RoomCta.propTypes = {};

export default RoomCta;
