import React from "react";
import Display from "./Display";
import { getWeather } from './AsyncStuff.js';

var App = React.createClass({
	getInitialState() {
		return {
			address: ""
		}
	},
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input ref="input" />
				</form>
				<h1>{this.state.address}</h1>
			</div>
		)
	},
	handleSubmit(e) {
		e.preventDefault();
		getWeather.apply(this, this.refs.input.value.split(","));
	}
});

export default App;
