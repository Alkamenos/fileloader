import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FileLoaderApp from './FileLoaderApp';
import * as Actions from '../actions/Actions';
import * as types from '../constants/ActionTypes';

class App extends Component {
	render() {
		const {fileloader, dispatch} = this.props;
		const actions = bindActionCreators(Actions, dispatch);

		return <FileLoaderApp fileloader={fileloader} actions={actions}/>

	}

	componentWillMount() {
		const {dispatch} = this.props;
		if (localStorage) {
			const files = localStorage.getItem('files');
			if (files) {
				dispatch({
					type: types.FILELIST_FOUND,
					payload: {files: JSON.parse(files)}
				});
			}
		}
	}
}


function mapStateToProps(state) {
	return {
		fileloader: state.fileloader
	}
}

export default connect(mapStateToProps)(App)
