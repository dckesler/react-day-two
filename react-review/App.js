import React from "react";
import Child from './Child';

var App = React.createClass({
	getInitialState() {
		return {
			name: "Dan"	
		}
	},
	render() {
		return (
			<div>
				I Didn't
				<input onKeyDown={this.handleKeyDown} />
				<Child
					name={this.state.name}
					setChip={this.setToChip.bind(this)} />	
			</div>
		)	
	},
	handleKeyDown(event) {
		if (event.keyCode === 13) {
			this.setState({
				name: event.target.value
			})	
		}	
	},
	setToChip() {
		this.setState({
			name: "Chip"
		})	
	}
});

export default App;
