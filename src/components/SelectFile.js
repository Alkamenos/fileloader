import React, { PropTypes, Component } from 'react';

export default class SelectFile extends Component {

	render() {
		return (<div className='select-file'>
			<i className='fa fa-cloud-upload fa-5x'></i>
			<div className='caption'>Drag &amp; Drop</div>
			<div className='text'>
				<span>your file anywhere, or&nbsp;</span>
				<span className='link'>
					<div>browse</div>
					<input ref={node=>this.input = node} type='file' />
				</span>
			</div>
		</div>)
	}

	onChange() {
		const {onFileSelected} = this.props;
		const files = this.input.files;
		onFileSelected(files);
	}
}

SelectFile.propTypes = {
	onFileSelected: PropTypes.func.isRequired
};
