export const getLocation = async () => {
	try {
		const res = await fetch(
			`https://api.geoapify.com/v1/ipinfo?&apiKey=f1ca1a8db93f494aa202db77b6cd15c6`,
		);
		const data = await res.json();

		console.log("LOCATION:", data)

		return data;
	} catch (err) {
		console.error("Erro: ", err);
	}
};
