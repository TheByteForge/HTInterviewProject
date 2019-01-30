/*
 * HotelRoomItem Messages
 *
 * This contains all the text for the HotelRoomItem component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.HotelRoomItem';

export default defineMessages({
  hotelMessage: {
    id: `${scope}.hotel.message`,
    defaultMessage: `{hotel}`,
  },
});
