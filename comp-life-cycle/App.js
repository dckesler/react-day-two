import React from "react";
import Child from './Child.js';

var App = React.createClass({
	getInitialState() {
		return {
			visible: false,
			value: ""
		}	
	},
	componentWillMount() {
		console.log("will mount")
	},
	componentDidMount() {
		console.log("did mount")
	},
	render() {
		return (
			<div>
				<button onClick={this.onOff}>Show/Hide Child</button>
				<input onChange={(e) => {
					this.setState({
						value: e.target.value
					})
				}}/>
			{this.state.visible ? <Child value={this.state.value}/> : null}
			</div>
		)
	},
	onOff() {
		this.setState({
			visible: !this.state.visible
		})
	}
})

export default App;
