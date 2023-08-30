import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { GlobalStyles } from "./styles/global";
import { Metric } from "web-vitals";
import { reportWebVitals } from "./reportWebVitals";

const rootElement = document.getElementById("root");
const handleWebVitals = (metric: Metric) => {
	console.log(metric);
};

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<GlobalStyles />
			<App />
		</React.StrictMode>,
	);
} else {
	console.error("Element 'root' not found in the DOM.");
}

reportWebVitals(handleWebVitals);
