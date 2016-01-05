import React from "react";
import Child from './Child';
import Stateless from './StatelessComp';

var App = React.createClass({
	render() {
		return (
			<div>
				<Child names={["name", "othername"]}/>
				<Stateless name={"Jeffrey"}/>
			</div>
		)
	}
});

export default App;
