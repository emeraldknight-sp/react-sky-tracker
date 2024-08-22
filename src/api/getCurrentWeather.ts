import axios from "axios";

export const getCurrentWeatherData = async (location: GeolocationPosition) => {
	const language = "pt";
	const apikey = process.env.REACT_APP_API_KEY_WEATHER;
	const aqi = process.env.REACT_APP_AIR_QUALITY;
	const baseUrl = process.env.REACT_APP_BASE_URL;

	try {
		const response = await axios.get(
			`${baseUrl}/current.json?key=${apikey}&q=${location.coords.latitude},${location.coords.longitude}&aqi=${aqi}&lang=${language}`,
		);

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(`Current Preview ${error.name}: ${error.message}`);
		} else {
			console.error("Unexpected error:", error);
		}
		return { error: "Unable to obtain data." };
	}
};
