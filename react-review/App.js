import React from 'react';

import Child from './Child.js';

const Parent = React.createClass({
	getInitialState() {
		return {
			names: "Dan",
			lastName: ""
		}
	},
	render() {
		return (
			<div >
				<input onChange={this.handleChange}/>
				<h1 onClick={this.handleClick}>{this.state.name + this.state.lastName}</h1>

				<Child
					name={this.state.name}
					changeLastName={this.changeLastName}/>

			</div>
		)
	},
	changeLastName(value) {
		this.setState({
			lastName: value
		})
	},
	handleChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	},
	handleClick() {
		this.setState({
			name: this.state.inputValue
		})
	}
});
export default Parent;
