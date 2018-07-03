import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../containers/map_marker';

const googleAPIKey = 'AIzaSyCb1O-AFmLfgbh0htWvHo4Mqk8wHNLLlP0';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.158854,
      lng: -30.504120
    },
    zoom: 3,
    photos: []
  };

  //TODO:  Filter these down to 1 per city
	addMapMarker(photoData) {
    return (
        <MapMarker lat={photoData._attributes.latitude}
                 lng={photoData._attributes.longitude}
                 title={photoData._attributes.title}
                 key={photoData._attributes.id}
                 />
    );

	}

  addMapMarkers() {
    if (this.props.photos) {
      return this.props.photos.map(this.addMapMarker);
    }
    else
      return null;
  }

  render() {
    console.log(this.state);
    if (this.props.photos) {
      return (
        <div id="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleAPIKey }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
  					{this.addMapMarkers()}
          </GoogleMapReact>
        </div>
      );
    }
  }
}

function mapStateToProps({ photos }) {
	return { photos };
}

export default connect(mapStateToProps)(SimpleMap);
