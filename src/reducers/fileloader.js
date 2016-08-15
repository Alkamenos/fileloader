import * as modes from '../constants/Modes';
import * as type from '../constants/ActionTypes';

const initialState = {
	dragAndDrop: false,
	mode: modes.READY,
	error: '',
	filename: '',
	expiry:'',
	link: '',
	files: []
};

export default function fileloader(state = initialState, action) {
	const { payload } = action;
	switch (action.type) {

		case type.INIT:
			return {...state, mode: modes.READY, dragAndDrop:false};

		case type.UPLOADING:
		{
			const {filename} = payload;
			return {...state, mode: modes.UPLOADING, filename};
		}

		case type.UPLOADED:
		{
			const {filename, link, expiry} = payload;
			return {
				...state,
				mode: modes.UPLOADED,
				filename,
				link,
				expiry,
				files: state.files.concat([{filename, link, expiry}])
			};
		}

		case type.UPLOAD_ERROR:
			const {error} = payload;
			return {...state, mode: modes.ERROR, error};


		case type.DROP_MODE:
			return {...state, dragAndDrop: true};

		case type.SELECT_MODE:
			return {...state, dragAndDrop: false};

		case type.FILELIST_FOUND:
			const {files} = payload;
			return {...state, files: files};

		default:
			return state;
	}
}
