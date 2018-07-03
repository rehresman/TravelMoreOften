import React, { Component } from 'react';

export default class Photo extends Component {
  render() {
  	return (
  		<img  src={this.props.url}
  					title={this.props.title}
  					alt={this.props.altText}
  					className="full-width" />
  	);
	}
}
