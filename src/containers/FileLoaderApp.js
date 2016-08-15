import React, { PropTypes, Component } from 'react';
import DropFile from '../components/DropFile'
import SelectFile from '../components/SelectFile'
import Success from '../components/Success'
import Uploading from '../components/Uploading'
import Error from '../components/Error'
import List from '../components/List'
import * as modes from '../constants/Modes.js';

export default class FileLoaderApp extends Component {

	constructor() {
		super();
		document.body.addEventListener('dragenter',this.onDragEnter.bind(this), false);
	}

	render() {
		const {dragAndDrop, mode ,files,filename, link, error, expiry} = this.props.fileloader;
		switch (mode) {
			case modes.READY:
				if (dragAndDrop) {
					return <DropFile
						onDragLeave={this.onDragLeave.bind(this)}
						onDragOver={this.onDragOver.bind(this)}
						onDrop={this.onDrop.bind(this)}
						/>
				} else {
					return <div>
						<SelectFile onFileSelected={this.onFileSelected.bind(this)}
							/>
						<List files={files}/>
					</div>
				}

			case modes.UPLOADING:
				return <Uploading filename={filename}/>

			case modes.UPLOADED:
				return <Success link={link} filename={filename} expiry={expiry} newUpload={this.newUpload.bind(this)}/>

			case modes.ERROR:
				return <Error errorMessage={error} newUpload={this.newUpload.bind(this)}/>


			default :
				return <div>Something went wrong... :(</div>
		}

	}

	onDragOver(event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'copy';
	}

	onDragEnter() {
		const {actions} = this.props;
		actions.useDrop();

	}

	onDragLeave() {
		const {actions} = this.props;
		actions.useSelect();
	}

	onDrop(event) {
		const {actions} = this.props;
		const files = event.dataTransfer.files;

		actions.upload(files);
		event.preventDefault();
	}

	onFileSelected(files) {
		const {actions} = this.props;
		actions.upload(files);
	}

	newUpload() {
		const {actions} = this.props;
		actions.init();
	}
}

FileLoaderApp.propTypes = {
	actions: PropTypes.object.isRequired,
	fileloader: PropTypes.object.isRequired
};
