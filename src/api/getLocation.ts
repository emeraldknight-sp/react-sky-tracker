import axios from "axios";

export const getLocation = async () => {
	const apikey = process.env.REACT_APP_API_KEY_WEATHER;
	const appLocation = process.env.REACT_APP_LOCATION;

	const getPosition = () => {
		return new Promise((resolve, reject) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const coords = `${position.coords.latitude},${position.coords.longitude}`;
						resolve(coords);
					},
					(error) => reject(error),
				);
			} else {
				reject(new Error("Geolocation não suportada"));
			}
		});
	};

	try {
		const location = await getPosition();
		const { data } = await axios.get(
			`https://api.weatherapi.com/v1/search.json?key=${apikey}&q=${location}`,
		);

		return data[0];
	} catch (error) {
		console.error("Error: ", error);

		try {
			const { data } = await axios.get(
				`https://api.weatherapi.com/v1/ip.json?key=${apikey}&q=${appLocation}`,
			);
			return data;
		} catch (fallbackError) {
			console.error("Erro na tentativa de fallback: ", fallbackError);
			throw fallbackError;
		}
	}
};
