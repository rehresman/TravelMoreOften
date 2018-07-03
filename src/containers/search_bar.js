import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncFetchPhotos } from '../actions/index';

//TODO: Define/refactor an action creator to hook this up to PhotoList
// 			or turn this into a react router link...need to test react
// 			router's fuzzy logic

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.asyncFetchPhotos(this.state.term);
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Search for a location"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
					/>
				<span className="input-group-append">
					<button type="submit" className="btn btn-primary"><i className="fas fa-search"></i></button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ asyncFetchPhotos }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
