import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

AnyReactComponent.propTypes = {
  text: PropTypes.string,
};

class GoogleMaps extends React.PureComponent {
  static defaultProps = {
    center: {
      lat: 37.783377,
      lng: -122.40806878210267,
    },
    zoom: 13,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'nice_try_hackers_lol' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.783377}
            lng={-122.40806878210267}
            text="Hotel Tonight"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

GoogleMaps.propTypes = {
  center: PropTypes.any,
  zoom: PropTypes.number,
};

export default GoogleMaps;
