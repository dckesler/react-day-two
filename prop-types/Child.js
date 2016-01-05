import React from "react";

var Child = React.createClass({
	propTypes: {
		names: React.PropTypes.array.isRequired	
	},
	render() {
		return (
			<div>
				{this.props.names.map(function(name, index){
					return <p key={index}>{name}</p>	
				})}	
			</div>
		)	
	}
});

export default Child;
