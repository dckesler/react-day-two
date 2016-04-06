import React from "react";

var Child = React.createClass({
	propTypes: {
		value: React.PropTypes.shape({
			number: React.PropTypes.number.isRequired
		})
	},
	render() {
		return (
			<div>
				Child
			</div>
		)	
	}
})

export default Child;
