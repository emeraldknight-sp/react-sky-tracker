import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ContextProvider } from "./context/index";
import { GlobalStyles } from "./styles/global";
import { Metric } from "web-vitals";
import { Toaster } from "react-hot-toast";
import { reportWebVitals } from "./reportWebVitals";

const rootElement = document.getElementById("root");
const handleWebVitals = (metric: Metric) => {
	console.log(metric);
};

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<ContextProvider>
				<Toaster position="bottom-right" reverseOrder={false} />
				<GlobalStyles />
				<App />
			</ContextProvider>
		</React.StrictMode>,
	);
} else {
	console.error("Element 'root' not found in the DOM.");
}

reportWebVitals(handleWebVitals);
