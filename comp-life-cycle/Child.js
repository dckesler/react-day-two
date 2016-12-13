import React from "react";

export default class Child extends React.Component {
	componentWillMount() {
		console.log("Child will mount");
	}
	componentDidMount() {
		console.log("Child did mount");
	}
	componentWillUnmount() {
		console.log("Child will unmount");
	}
	componentWillReceiveProps(nextProps) {
		console.log("Child - Old - ", this.props.name)
		console.log("Child - New - ", nextProps.name)
	}
	render() {
		console.log("Child Render");
		return (
			<h1>
				{this.props.name}
				Child Component
			</h1>
		)
	}
}
