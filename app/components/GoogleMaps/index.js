/**
 *
 * GoogleMaps
 *
 */

import React from 'react';
import GoogleMapReact from 'google-map-react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


/* eslint-disable react/prefer-stateless-function */
class GoogleMaps extends React.PureComponent {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      // <div style={{ height: '100vh', width: '100%' }}>
      //   <GoogleMapReact
      //     bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      //     defaultCenter={this.props.center}
      //     defaultZoom={this.props.zoom}
      //   >
      //     <AnyReactComponent
      //       lat={59.955413}
      //       lng={30.337844}
      //       text="My Marker"
      //     />
      //   </GoogleMapReact>
      // </div>
    );
  }
}

GoogleMaps.propTypes = {};

export default GoogleMaps;
