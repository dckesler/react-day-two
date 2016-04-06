import React from "react";

var App = React.createClass({
	render() {
		return (
			<div>
				<button onClick={this.callApplyCheck.bind(this)}>Check Context via Bind</button>
				<button onClick={this.callApplyCheck.bind(this, 6)}>Check Arguments with Currying</button>
				<button onClick={this.callApplyCheck}>Check Call and Apply</button>
			</div>
		)
	},
	callApplyCheck(x) {
		console.log(x);	
	}
})

export default App;
