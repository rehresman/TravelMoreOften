import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOriginalUrl, updateFeaturedPhoto } from '../actions/index';
import Photo from '../components/photo.js';

//TODO: users expect to scroll through pictures by clicking on the
//			featuredPhoto or through arrow keydowns.  Need to add an index
// 			value to the state.

class FeaturedPhoto extends Component {
	constructor() {
		super();
		//large-sized photo URL != thumbnail photo URL.  they don't even live in
		//the same server farm
		this.state = { featuredPhoto: null,
                   featuredPhotoUrl: null };
	}

	//TODO: make all the featured pictures the same size - portrait vs
	//			landscape should still be different
	//TODO: make correct space for pictures on Loading... screen
	//TODO: add Loading...screen to async flow when switching pictures
	//TODO: remove gutters on mobile
	//TODO: perf: load lower res images for smaller viewports
	render () {
		if (this.props.featuredPhoto && this.props.featuredPhotoUrl) {
			const p = this.props.featuredPhoto._attributes;
			const url = this.props.featuredPhotoUrl;
			const altText = `${p.title}: ${p.desc} in original size`;
			const thumbnail = false;
      return (
				<div key={p.id}>
					<div className="img-fluid featured-photo">
		        <Photo desc={this.props.featuredPhoto.description._text}
										 id={p.id}
										 key={p.id}
										 lat={p.latitude}
										 lng={p.longitude}
										 title={p.title}
										 farm={p.farm}
										 server={p.server}
										 secret={p.secret}
										 size= 'o'
										 url={url}
										 altText={altText} />
					</div>
					<hr />
  			</div>
      );
		}
		else {
			return (
  			<div className="featured-photo">
          <h3 className="text-muted">Loading photo...</h3>
  			</div>
      );
		}

  }
}

function mapStateToProps({featuredPhoto, featuredPhotoUrl}) {
  return {featuredPhoto, featuredPhotoUrl };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchOriginalUrl, updateFeaturedPhoto}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPhoto);
