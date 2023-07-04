import axios from "axios";

import { locationNameFormat } from "../components/utils/locationFormat";
import { GeoLocationData } from "../interfaces/GeoLocationData";

export const getCurrentWeatherData = async (props: GeoLocationData) => {
	const location = locationNameFormat(props, "string") || "Teresina";

	try {
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/current.json?key=f2345c34a365497db90123644230106&q=${location}&aqi=yes`,
		);

		return data;
	} catch (error) {
		console.error("Erro: ", error);
		throw error;
	}
};
