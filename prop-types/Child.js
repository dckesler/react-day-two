import React from "react";

export default class Child extends React.Component {
	static propTypes = {
		name: React.PropTypes.string
	}
	render() {
		return (
			<div>
				Child
			</div>
		)	
	}
}
