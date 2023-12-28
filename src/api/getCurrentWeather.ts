import axios from "axios";
import { GeoLocation } from "../interfaces/GeoLocation";

export const getCurrentWeatherData = async ({lat, lon}: GeoLocation) => {
	const language = "pt";
	const apikey = process.env.REACT_APP_API_KEY_WEATHER;
	const aqi = process.env.REACT_APP_AIR_QUALITY;

	try {
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${lat},${lon}&aqi=${aqi}&lang=${language}`,
		);

		return data;
	} catch (error) {
		console.error("Erro: ", error);
		throw error;
	}
};
