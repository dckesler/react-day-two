import React from "react";

var Child = React.createClass({
	componentWillMount() {
		console.log("will mount - child")
	},
	componentDidMount() {
		console.log("did mount - child")
	},
	componentWillReceiveProps(props) {
		console.log(this.props, props)
	},
	componentWillUnmount(){
		console.log("im about to unmount")
	},
	render() {
		return (
			<h1>Child Component</h1>
		)
	}
})

export default Child;
