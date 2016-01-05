import React from "react";

var App = React.createClass({
	getInitialState() {
		return {
			visible: false
		}	
	},
	render() {
		return (
			<div>
				<button onClick={this.onOff}>Show/Hide Child</button>
				{this.state.visible ? <Child /> : null}
			</div>
		)
	},
	onOff() {
		this.setState({
			visible: !this.state.visible
		})
	}
})
