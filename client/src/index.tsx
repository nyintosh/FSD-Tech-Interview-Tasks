import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const $main = document.querySelector("main");

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	$main
);
