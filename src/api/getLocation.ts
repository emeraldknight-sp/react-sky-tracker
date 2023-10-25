import axios from "axios";

export const getLocation = async () => {
	try {
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/ip.json?key=f2345c34a365497db90123644230106&q=auto:ip`,
		);

		return data;
	} catch (error) {
		console.error("Erro: ", error);
		throw error;
	}
};
