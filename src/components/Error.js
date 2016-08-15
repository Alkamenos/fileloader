import React, { PropTypes, Component } from 'react';

export default class Error extends Component {
	render() {
		const {errorMessage} = this.props;

		return (<section className='error'>
			<header>
				<i className='fa fa-exclamation-triangle fa-5x'/>
				<h2> Something went wrong... :( </h2>
			</header>
			<h3> Message:
				<small>{errorMessage} </small>
			</h3>
			<button onClick={this.onClick.bind(this)}>Try again!</button>
		</section>)
	}

	onClick() {
		const {newUpload} = this.props;
		newUpload();
	}
}

Error.propTypes = {
	newUpload: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired
};
