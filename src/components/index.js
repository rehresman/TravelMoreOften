import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import PhotoList from '../containers/photo_list';
import Header from '../components/header';
import GoogleMap from '../containers/google_map';
import MapErrorBoundary from './map_error_boundary';

export default class Index extends Component {
  render() {
    return (
      <div>
      	<Header title="Travel More Often"/>
      	<SearchBar />
        <MapErrorBoundary >
          <GoogleMap />
        </MapErrorBoundary>
      	<PhotoList />
      </div>
    );
  }
}
