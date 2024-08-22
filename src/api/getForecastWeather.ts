import axios from "axios";

export const getForecastWeatherData = async (location: GeolocationPosition) => {
	const language = "pt";
	const apikey = process.env.REACT_APP_API_KEY_WEATHER;
	const aqi = process.env.REACT_APP_AIR_QUALITY;
	const alerts = process.env.REACT_APP_ALERTS;
	const days = process.env.REACT_APP_DAYS;
	const baseUrl = process.env.REACT_APP_BASE_URL;

	try {
		const response = await axios.get(
			`${baseUrl}/forecast.json?key=${apikey}&q=${location.coords.latitude},${location.coords.longitude}&days=${days}&aqi=${aqi}&alerts=${alerts}&lang=${language}`,
		);

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(`Forecast Preview ${error.name}: ${error.message}`);
		} else {
			console.error("Unexpected error:", error);
		}
		return { error: "Unable to obtain data." };
	}
};
