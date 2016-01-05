import React from "react";
import Child from "./Child.js";
var App = React.createClass({
	render() {
		return (
			<div>
				App
				<Child name="Jeff" />
			</div>
		)	
	}
});

export default App;
