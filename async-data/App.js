import React from "react";
import Display from "./Display";
import { getPokemon } from './AsyncStuff.js';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
		}
	}
	render() {
		return (
			<div>
				<input onKeyDown={this.handleOnKeyDown.bind(this)}/>
				<Display img={this.state.img}/>
			</div>
		)
	}
	handleOnKeyDown(e) {
		if (e.keyCode == 13) {
			getPokemon(e.target.value)
				.then(data => {
					console.log(data.data);
					this.setState({
						img: data.data.sprites.front_shiny,
					})
				})
		}
	}
}
