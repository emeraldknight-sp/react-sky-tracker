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
				<GlobalStyles />
				<Toaster
					position="bottom-right"
					richColors
					toastOptions={{
						style: {
							border: "1px solid hsl(221, 91%, 91%)",
							padding: "16px",
						},
					}}
				/>
				<App />
			</ContextProvider>
		</React.StrictMode>,
	);
} else {
	console.error("Element 'root' not found in the DOM.");
}

// This function is responsible for calculating and returning metrics

reportWebVitals(handleWebVitals);
