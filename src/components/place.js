import React, { Component } from 'react';
import PhotoList from '../containers/photo_list';
import Header from './header';
import FeaturedPhoto from '../containers/featured_photo';

//TODO: hook this up to mapMarker clicks
//TODO: Hook this up to the searchbar
//TODO: hook this up to react router

export default class Index extends Component {
  render() {
    return (
      <div>
      	<Header title="Somewhere" back="true"/>
        <FeaturedPhoto />
      	<PhotoList />
      </div>
    );
  }
}
