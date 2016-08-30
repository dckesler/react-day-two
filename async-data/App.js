import React from "react";
import Display from "./Display";
export default React.createClass({
	render() {
		<div>
			<form>
				<input onSubmit={this.handleSubmit}/>
			</form>
			<Display />
		</div>
	},
	handleSubmit(e) {
		console.log(e)	
	}
});
