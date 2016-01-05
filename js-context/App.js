import React from "react";
import * as jsContext from "./js-context.js"; 

var App = React.createClass({
	render() {
		return (
			<div>
				<button onClick={jsContext.checkContext.bind(this)}>Check Context via Bind</button>
				<button
					onClick={jsContext.checkArguments.bind(this, "Dan", "Jason", "Cahlan")}>
					Check Arguments with Currying
				</button>
				<button onClick={this.callApplyCheck}>Check Call and Apply</button>
			</div>
		)
	},
	callApplyCheck() {
		jsContext.checkContext.call(this);	
		jsContext.checkContext.apply(this);
		jsContext.checkArguments.call(this, 1, 2, 3);
		jsContext.checkArguments.apply(this, [1,2,3]);
	}
});

export default App;
