import axios from "axios";

export const getLocation = async () => {
	try {
		const { data } = await axios.get("https://api.geoapify.com/v1/ipinfo", {
			params: {
				apiKey: "f1ca1a8db93f494aa202db77b6cd15c6",
			},
		});

		return data;
	} catch (error) {
		console.error("Erro ao obter dados de localização:", error);
		throw error;
	}
};
