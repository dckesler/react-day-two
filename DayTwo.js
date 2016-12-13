import React from "react";
import ReactDOM from "react-dom";
import ReactReview from './react-review/App.js';
import CompLifeCycle from './comp-life-cycle/App.js';
import JsContext from './js-context/App.js';
import AsyncData from './async-data/App.js';
import DefaultProps from './default-props/App.js';
import PropTypes from './prop-types/App.js';

const DayTwo = React.createClass({
	render() {
		return (
			<div>
				<PropTypes />
			</div>
		)	
	}
});

ReactDOM.render(<DayTwo />, document.getElementById("app"));
