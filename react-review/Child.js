import React from 'react';

const Child = React.createClass({
	render() {
		return (
			<div>
				Child of 
				<br/>
				<input onChange={this.handleChange}/>
			</div>
		)
	},
	handleChange(e) {
		this.props.changeLastName(e.target.value);
	}
})

export default Child;
