import axios from "axios";
import { GeoLocation } from "../interfaces/GeoLocation";

export const getForecastWeatherData = async ({ lat, lon }: GeoLocation) => {
	const language = "pt";
	const apikey = process.env.REACT_APP_API_KEY_WEATHER;
	const aqi = process.env.REACT_APP_AIR_QUALITY;
	const alerts = process.env.REACT_APP_ALERTS;
	const days = process.env.REACT_APP_DAYS;

	try {
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${lat},${lon}&days=${days}&aqi=${aqi}&alerts=${alerts}&lang=${language}`,
		);

		return data;
	} catch (error) {
		console.error("Erro: ", error);
		throw error;
	}
};
