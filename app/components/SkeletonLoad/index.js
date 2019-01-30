/**
 *
 * SkeletonLoad
 * -----------------------------
 * In interest of time I ended up not creating this component fully
 * but, in a situation where I have more than a day, this component would
 * instead of presenting a ring loading indicator, provide a skeleton loader
 * similar to how many social media feed sites (i.e. facebook) present faked
 * data to the user so that they percieve/know the layout is being rendered
 * before loading has completed.
 *
 */

import React from 'react';

// Styled Components
import LoadPage from './LoadPage';
import RingLoader from './RingLoader';

function SkeletonLoad() {
  return (
    <LoadPage>
      <RingLoader />
    </LoadPage>
  );
}

SkeletonLoad.propTypes = {};

export default SkeletonLoad;
