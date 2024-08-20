import { createContext, useEffect, useState } from "react";
import { getLocation } from "../api/getLocation";
import { mockLocation } from "../mock/mockLocation";

export const LocationContext = createContext<GeolocationPosition>(mockLocation);

export const LocationProvider = ({ children }: LocationProviderProps) => {
	const [location, setLocation] = useState<GeolocationPosition>(mockLocation);

	const fetchLocationData = async () => {
		try {
			const data = await getLocation();
			setLocation(data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		fetchLocationData();
		const intervalId = setInterval(fetchLocationData, 30000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<LocationContext.Provider value={location}>
			{children}
		</LocationContext.Provider>
	);
};
