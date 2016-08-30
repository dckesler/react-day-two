import React from "react";

export default React.createClass({
	render() {
		return (
			<div>
				<button onClick={this.callApplyCheck}>Check Context via Bind</button>
				<button onClick={this.callApplyCheck}>Check Arguments with Currying</button>
				<button onClick={this.callApplyCheck}>Check Call and Apply</button>
			</div>
		)
	},
	callApplyCheck() {
			
	}
})
