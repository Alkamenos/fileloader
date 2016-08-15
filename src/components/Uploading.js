import React, { PropTypes, Component } from 'react';

export default class Uploading extends Component {
	render() {
		const {filename} = this.props;
		return (<section className='uploading'>
			<header>
				<i className='fa fa-cloud-upload fa-5x'/>

				<h2>Uploading file...</h2>
			</header>
			<h3>Filename: {filename}</h3>
		</section>)
	}
}

Uploading.propTypes = {
	filename: PropTypes.string.isRequired
};
