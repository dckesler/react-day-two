import React from "react";
import Child from './Child.js';

export default React.createClass({
	render() {
		return (
			<div>
				<Child name={1}/>
			</div>
		)
	}
})
