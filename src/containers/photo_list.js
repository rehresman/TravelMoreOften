import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchPhotos, thumbnailClick } from '../actions/index';
import Photo from '../components/photo.js';


//TODO: populate location
class PhotoList extends Component {
	constructor() {
		super();
		this.state = { location: '',
	 									photoArray: [] };
	}

	componentDidMount() {
		if (!this.state.location && !this.props.photos[0]) {
			this.props.asyncFetchPhotos();
		}
		//TODO: asyncFetchPhotos appends photos to the PhotoList state.
		//			we actually want to replace them in this case.
		if (this.state.location) {
			this.props.asyncFetchPhotos(this.state.location);
		}
	}

	//TODO: change cursor on hover
	addPhoto(photoData) {
		const p = photoData._attributes;
		const size = 'm'; //our thumbnail size
		const url = `https://farm${p.farm}.staticflickr.com/`
								+ `${p.server}/${p.id}_${p.secret}_${size}.jpg`;
		const altText = `${p.title}: ${p.desc}`;
		return (
			<div className='col-sm-3' key={p.id}>
				<div href='#'
						 className="img-thumbnail text-center"
						 onClick={() => this.props.thumbnailClick(photoData)}>
					<Photo desc={photoData.description._text}
								 id={p.id}
								 key={p.id}
								 lat={p.latitude}
								 lng={p.longitude}
								 title={p.title}
								 farm={p.farm}
								 server={p.server}
								 secret={p.secret}
								 size={size}
								 url={url}
								 altText={altText} />
				</div>
			</div>
		);
	}

	render () {
		if (this.props.photos[0]) {
			return (
				<div >
					<div className="row align-items-center">
						{this.props.photos.map(this.addPhoto.bind(this))}
					</div>
				</div>
			);
		}
		else
			return(
				<div className="lds-grid">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			);
	}
}

function mapStateToProps({ photos }) {
	return { photos };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({asyncFetchPhotos, thumbnailClick}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
