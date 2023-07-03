import { locationNameFormat } from "../components/utils/locationFormat";
import { GeoLocationData } from "../interfaces/GeoLocationData";
const locationString = "Teresina";

export const getForecastWeatherData = async (props: GeoLocationData) => {
	const location = locationNameFormat(props, "string") || locationString;

	try {
		const res = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=f2345c34a365497db90123644230106&q=${location}&days=yes&aqi=yes&alerts=yes`,
		);
		const data = await res.json();

		console.log("FORECAST:", data)

		return data;
	} catch (err) {
		console.error("Erro: ", err);
	}
};
