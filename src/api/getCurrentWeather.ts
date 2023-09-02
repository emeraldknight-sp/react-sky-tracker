import axios from "axios";

export const getCurrentWeatherData = async () => {
	const language = "pt";

	try {
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/current.json?key=f2345c34a365497db90123644230106&q=auto:ip&aqi=yes&lang=${language}`,
		);

		return data;
	} catch (error) {
		console.error("Erro: ", error);
		throw error;
	}
};
