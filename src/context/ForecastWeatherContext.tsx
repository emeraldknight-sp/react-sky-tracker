import { createContext, useContext, useEffect, useState } from "react";
import { getForecastWeatherData } from "../api/getForecastWeather";
import { LocationContext } from "./LocationContext";

export const ForecastWeatherContext = createContext({});

interface ForecastWeatherProviderProps {
	children: React.ReactNode;
}

export const ForecastWeatherProvider = ({ children }: ForecastWeatherProviderProps) => {
	const [forecast, setForecast] = useState({});
	const location = useContext(LocationContext);

	const fetchForecastWeatherData = async () => {
		if (location) {
			try {
				const data = await getForecastWeatherData(location);
				setForecast(data);
			} catch (error) {
				console.error("Erro ao obter dados de previsão do tempo:", error);
			}
		}
	};

	useEffect(() => {
		if (location) {
			fetchForecastWeatherData();
		}
	}, [location]);

	return (
		<ForecastWeatherContext.Provider value={forecast}>
			{children}
		</ForecastWeatherContext.Provider>
	);
};
