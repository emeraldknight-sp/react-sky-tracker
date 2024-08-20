import { Metric, onCLS, onFCP, onLCP, onTTFB } from "web-vitals/attribution";

// This code is responsible for calculating the metrics,
// it is just an arrangement and can be improved
// to send the metrics report to some analysis service.

// CLS - Cumulative Layout Shift
// The cumulative layout shift detects sudden changes to the webpage.
// If a text or a link moves unexpectedly, we can end up clicking on something else by accident.

// FCP - First Contentful Paint
// The first contentful paint measures the delay between when the page starts loading
// and when any part of the content is visible.
// Again, we should strive to have an FCP of 1.8 seconds or lower.

// LCP - Largest Contentful Paint
// The largest contentful paint reports the render time of the largest image
// or text block visible in the viewport. We should aim to have an LCP of 2.5 seconds or less.

// Time to First Byte (TTFB)
// The time to the first byte measures the delay between
// the moment a user requests our page and when the first byte of the response arrives.

export const reportWebVitals = (onPerfEntry: (metric: Metric) => void) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		onCLS(onPerfEntry);
		onFCP(onPerfEntry);
		onLCP(onPerfEntry);
		onTTFB(onPerfEntry);
	}
};
