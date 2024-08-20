import { LocationContext } from "./LocationContext";
import { createContext, useContext, useEffect, useState } from "react";
import { getForecastWeatherData } from "../api/getForecastWeather";
import { mockForecast } from "../mock/mockForecast";

export const ForecastWeatherContext =
	createContext<ForecastWeather>(mockForecast);

export const ForecastWeatherProvider = ({
	children,
}: ForecastWeatherProviderProps) => {
	const [forecast, setForecast] = useState(mockForecast);
	const location = useContext(LocationContext);

	const fetchForecastWeatherData = async () => {
		if (location) {
			try {
				const data: ForecastWeather = await getForecastWeatherData(location);
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
