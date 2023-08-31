import { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";
import { getCurrentWeatherData } from "../api/getCurrentWeather";

export const CurrentWeatherContext = createContext({});

interface CurrentWeatherProviderProps {
	children: React.ReactNode;
}

export const CurrentWeatherProvider = ({
	children,
}: CurrentWeatherProviderProps) => {
	const [currentWeather, setCurrentWeather] = useState({});
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
