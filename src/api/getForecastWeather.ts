import axios from "axios";

export const getForecastWeatherData = async () => {
	const language = "pt"

	try {
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/forecast.json?key=f2345c34a365497db90123644230106&q=auto:ip&days=10&aqi=yes&alerts=yes&lang=${language}`,
		);

		return data;
	} catch (error) {
		console.error("Erro: ", error);
		throw error;
	}
};
