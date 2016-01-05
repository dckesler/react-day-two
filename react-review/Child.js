import React from "react";

var Child = React.createClass({
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<button onClick={this.props.setChip}>Set Name To Chip</button>
			</div>
		)	
	}
});

export default Child;
