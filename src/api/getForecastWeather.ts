import axios from "axios";

import { locationNameFormat } from "../components/utils/locationFormat";
import { GeoLocationData } from "../interfaces/GeoLocationData";

export const getForecastWeatherData = async (props: GeoLocationData) => {
	const location = locationNameFormat(props, "string") || "Teresina";

	try {
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/forecast.json?key=f2345c34a365497db90123644230106&q=${location}&days=yes&aqi=yes&alerts=yes`,
		);

		return data;
	} catch (error) {
		console.error("Erro: ", error);
		throw error;
	}
};
