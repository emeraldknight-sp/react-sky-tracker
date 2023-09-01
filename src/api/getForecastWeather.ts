import axios from "axios";

import { locationNameFormat } from "../components/utils/locationFormat";
import { GeoLocation } from "../interfaces/GeoLocation";

export const getForecastWeatherData = async (props: GeoLocation) => {
	const location = locationNameFormat(props, "string") || "Teresina";
	const language = "pt"

	try {
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/forecast.json?key=f2345c34a365497db90123644230106&q=${location}&days=10&aqi=yes&alerts=yes&lang=${language}&tides=yes`,
		);

		return data;
	} catch (error) {
		console.error("Erro: ", error);
		throw error;
	}
};
