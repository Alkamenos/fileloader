import React, { PropTypes, Component } from 'react';

export default class Success extends Component {
	render() {
		const {link, expiry} = this.props;
		return (<section className='success'>
			<header>
				<i className='fa fa-thumbs-o-up fa-5x'/>
				<h2>Success! You're awesome!</h2>
			</header>
			<h3> Here is your link: <a href={link}>{link}</a></h3>
			<h3><small> Expiration time - {expiry}</small></h3>
			<button onClick={this.onClick.bind(this)}>Upload new file</button>
		</section>)
	}

	onClick(){
		const {newUpload} = this.props;
		newUpload();
	}
}

Success.propTypes = {
	newUpload: PropTypes.func.isRequired,
	link: PropTypes.string.isRequired,
	expiry: PropTypes.string.isRequired
};
