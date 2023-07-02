import { locationNameFormat } from "../components/utils/locationFormat";
import { GeoLocationData } from "../interfaces/GeoLocationData";

const locationString = process.env.LOCATION;

export const getCurrentWeatherData = async (props: GeoLocationData) => {
	const location = locationNameFormat(props, "string") || locationString;

	try {
		const res = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=f2345c34a365497db90123644230106&q=${location}&aqi=yes`,
		);
		const data = await res.json();

		return data;
	} catch (err) {
		console.error("Erro: ", err);
	}
};
