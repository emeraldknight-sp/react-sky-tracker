import { LocationContext } from "./LocationContext";
import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentWeatherData } from "../api/getCurrentWeather";
import { mockCurrent } from "../mock/mockCurrent";

export const CurrentWeatherContext = createContext<CurrentWeather>(mockCurrent);

export const CurrentWeatherProvider = ({
	children,
}: CurrentWeatherProviderProps) => {
	const [currentWeather, setCurrentWeather] = useState(mockCurrent);
	const location = useContext(LocationContext);

	const fetchCurrentWeatherData = async () => {
		if (location) {
			try {
				const data = await getCurrentWeatherData(location);
				setCurrentWeather(data);
			} catch (error) {
				console.error("Erro ao obter dados de previsão do tempo:", error);
			}
		}
	};

	useEffect(() => {
		if (location) {
			fetchCurrentWeatherData();
		}
	}, [location]);

	return (
		<CurrentWeatherContext.Provider value={currentWeather}>
			{children}
		</CurrentWeatherContext.Provider>
	);
};
