import React from "react";
import Child from './Child.js';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			visible: true,
			name: "Josh",
		}
	}
	componentWillMount() {
		console.log("Parent will mount");
	}
	componentDidMount() {
		console.log("Parent did mount");
	}
	render() {
		console.log("Parent render");
		return (
			<div>
				<button onClick={this.changeName.bind(this)}>Change Name</button>
				<button onClick={this.onOff.bind(this)}>Show/Hide Child</button>
				{this.state.visible ? <Child name={this.state.name}/> : null}
			</div>
		)
	}
	changeName() {
		this.setState({
			name: this.state.name + "+",
		})
	}
	onOff() {
		this.setState({
			visible: !this.state.visible
		})
	}
}
