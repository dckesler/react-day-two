import React from "react";

var Child = React.createClass({
	componentWillReceiveProps(props) {
		console.log(props)	
	},
	componentWillUnmount() {
		console.log("I'm unmounting")	
	},
	render() {
		return (
			<h1>Child Component</h1>
		)
	}
});

export default Child;
