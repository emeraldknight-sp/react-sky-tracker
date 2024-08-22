import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ContextProvider } from "./context/index";
import { GlobalStyles } from "./styles/global";
import { Metric } from "web-vitals";
import { Toaster } from "sonner";
import { reportWebVitals } from "./reportWebVitals";

const rootElement = document.getElementById("root");

// This code is responsible for returning the application's
// performance data in different characteristics.

const handleWebVitals = (metric: Metric) => {
	console.log(
		`${metric.name} | ${metric.navigationType} | ${metric.rating}: ${metric.value.toFixed(2)}`,
	);
};

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<ContextProvider>
				<Toaster position="bottom-right" richColors />
				<GlobalStyles />
				<App />
			</ContextProvider>
		</React.StrictMode>,
	);
} else {
	console.error("Element 'root' not found in the DOM.");
}

reportWebVitals(handleWebVitals);
