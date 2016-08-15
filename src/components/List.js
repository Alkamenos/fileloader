import React, { PropTypes, Component } from 'react';

export default class List extends Component {
	render() {
		const {files} = this.props;
		if(files.length) {
			return (<section className='files-list'>
				<header>
					<i className='fa fa-database'/> Recently uploaded:
				</header>
				<ul>

					{files.map((file, index)=> {
						return <li key={index}>
							<a href={file.link}>{file.filename}</a>
						</li>
					})}

				</ul>

			</section>)
		} else {
			return <div />
		}
	}
}

List.propTypes = {
	files: PropTypes.array.isRequired
};
