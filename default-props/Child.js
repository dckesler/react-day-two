import React from "react";

export default class Child extends React.Component {
	static defaultProps = {
		name: "Dan",
		favoritePokemon: "The Gear one",
	}
	render() {
		return (
			<div>
				Child
				{this.props.name}
				{this.props.favoritePokemon}
			</div>
		)
	}
}
