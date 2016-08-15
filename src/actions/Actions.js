import * as type from '../constants/ActionTypes';
const url = 'https:/file.io';

export function upload(files) {

	return dispatch => {
		const filename = files[0].name;
		let formData = new FormData();
		formData.append('file', files[0]);

		let xhr = new XMLHttpRequest();
		let errorMessage='';
		xhr.open('POST', url, true);
		xhr.onreadystatechange = ()=>{

			if(xhr.readyState === XMLHttpRequest.DONE){
				if(xhr.status === 200){
					const {link, expiry} = JSON.parse(xhr.response);

					dispatch({
						type: type.UPLOADED,
						payload:{filename, link, expiry}
					});

					if (localStorage) {
						let files = localStorage.getItem('files');
						if(files){
							files = JSON.parse(files);
							files.push({filename, link, expiry});
						} else {
							files = [{filename, link, expiry}];
						}
						localStorage.setItem('files', JSON.stringify(files))
					}

				} else if (xhr.status === 500){
					errorMessage = '500 Internal server error';
				}

				if(errorMessage){
					dispatch({
						type: type.UPLOAD_ERROR,
						payload: {error: errorMessage}
					});
				}
			}

		};

		xhr.send(formData);

		dispatch({
			type: type.UPLOADING,
			payload: {filename}
		});

	}
}

export function useDrop() {
	return {
		type: type.DROP_MODE
	}
}

export function useSelect() {
	return {
		type: type.SELECT_MODE
	}
}

export function init() {
	return {
		type: type.INIT
	}
}
