// import axios from "axios";
import { toast } from "sonner";

export const getLocation = async () => {
	// const apikey = process.env.REACT_APP_API_KEY_WEATHER;
	// const appLocation = process.env.REACT_APP_LOCATION;
	// const baseUrl = process.env.REACT_APP_BASE_URL;

	// This function queries the user's location,
	// asking for permission through a pop-up
	// that opens when entering the page

	const location = await new Promise<GeolocationPosition>((resolve, reject) => {
		// Below are the three constructed,
		// configured and separated parameters
		// to use in the .getCurrentPosition() function

		function success(position: GeolocationPosition) {
			resolve(position);
		}

		function error(err: GeolocationPositionError) {
			reject(`Geolocation | ${err.message}`);
		}

		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};

		// Next there is a conditional that asks the user
		// if they want to grant geolocation access permission.

		// The .getCurrentPosition method requires 3 parameters,
		// error and options are optional, but the success parameter is mandatory.
		// From time to time it is good to check the documentation.

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error, options);
		} else {
			toast.error("Serviço de geolocalização indisponível!", {
				id: "geolocation-blocked",
			});
		}
	});

	return location;

	// This code is commented and will be here in case one day I need this section

	// In the try-catch block, the following code will try to fetch data
	// based on the user's real location, if it fails, it will try to fetch information
	// based on an example location to return the data,
	// and without success in the request made, it returns an error.

	// try {
	// 	const geolocation: GeolocationPosition = await getPosition();
	// 	const { latitude, longitude } = geolocation.coords;

	// 	const { data } = await axios.get(
	// 		`${baseUrl}/search.json?key=${apikey}&q=${latitude},${longitude}`,
	// 	);

	// 	return data[0];
	// } catch (error) {
	// 	console.error("Error: ", error);

	// 	try {
	// 		const { data } = await axios.get(
	// 			`${baseUrl}/ip.json?key=${apikey}&q=${appLocation}`,
	// 		);
	// 		return data;
	// 	} catch (fallbackError) {
	// 		console.error("Erro na tentativa de fallback: ", fallbackError);
	// 		throw fallbackError;
	// 	}
	// }
};
