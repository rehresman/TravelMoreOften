import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MapMarker extends Component {

	//TODO: populate linkLocation through the flickr API.
	//TODO: make hover prettier
	render() {
		const mapMarkerStyle = this.props.$hover ? 'map-marker-hover' : 'map-marker';
		const linkLocation = `/places/`;
		return (
			<Link to={linkLocation}>
				<div className={mapMarkerStyle}>
				</div>
			</Link>
		);
	}
}
