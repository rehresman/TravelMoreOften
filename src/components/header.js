import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		if (this.props.back) {
			return (
				<div className='row justify-content-between p-3'>
					<div className="col-xs-6 display-1 text-truncate">{this.props.title}</div>
					<div className='col-xs-6 align-self-end'>
						<Link to='/'>
							<button className="btn btn-primary">
								Back to Map
							</button>
						</Link>
					</div>
				</div>

			);
		}
		else {
			return (
				<h1 className="display-1 text-truncate">{this.props.title}</h1>
			);
		}
	}
}
