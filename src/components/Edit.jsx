import React, { Component } from 'react';

import Form from "./Forms/Form";

import FourOhFour from "./FourOhFour";


class Edit extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.onLoad();
	}
	render() {
		const { fields, onEdit } = this.props;
		return fields ? (
			<div>
				<h2>Edit Article</h2>
				<Form
					className = "panel-body"
					onSubmit = { onEdit }
					fields = { fields }
					button="Edit Article"
				/>
			</div>
		) : <FourOhFour/>;
	}
}
export default Edit; 