import React from "react";
import Display from "./Display";

import { pokemon } from './AsyncStuff.js';
var App = React.createClass({
	getInitialState() {
		return {
			name: "Not butterfree"
		}
	},
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange}/>
					<h1>{this.state.name}</h1>
				</form>
			</div>
		)
	},
	handleChange(e) {
		this.setState({
			input: e.target.value
		})
	},
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.input)
		pokemon(this.state.input, this.showPokemon)
	},
	showPokemon(name) {
		this.setState({
			name
		})
	}
});

export default App;
