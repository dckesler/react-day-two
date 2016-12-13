import React from "react";

export default class Display extends React.Component {
	static defaultProps = {
		img: 'http://thecraftchop.com/files/others/Pokeball.svg'
	}
	render() {
		return (
			<div>
				<img src={this.props.img} />
			</div>
		)	
	}
}
