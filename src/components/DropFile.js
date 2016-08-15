import React, { PropTypes, Component } from 'react';

export default class DropFile extends Component {

	render(){
		const {onDragLeave, onDragOver, onDrop} = this.props;
		return (<div className='drag-and-drop' onDragLeave={onDragLeave} onDragOver={onDragOver} onDrop={onDrop}>
			Looks great! Now drop it!
		</div>)
	}
}

DropFile.propTypes = {
	onDragLeave: PropTypes.func.isRequired,
	onDragOver: PropTypes.func.isRequired,
	onDrop: PropTypes.func.isRequired
};
