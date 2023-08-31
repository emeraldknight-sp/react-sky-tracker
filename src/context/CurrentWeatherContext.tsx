import { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";
import { getCurrentWeatherData } from "../api/getCurrentWeather";
import { CurrentWeather } from "../interfaces/CurrentWeather";

export const CurrentWeatherContext = createContext<CurrentWeather>({
	location: {
		name: "",
		region: "",
		country: "",
		lat: 0,
		lon: 0,
		tz_id: "",
		localtime_epoch: 0,
		localtime: "",
	},
	current: {
		last_updated_epoch: 0,
		last_updated: "",
		temp_c: 0,
		temp_f: 0,
		is_day: 0,
		condition: {
			text: "",
			icon: "",
			code: 0,
		},
		wind_mph: 0,
		wind_kph: 0,
		wind_degree: 0,
		wind_dir: "",
		pressure_mb: 0,
		pressure_in: 0,
		precip_mm: 0,
		precip_in: 0,
		humidity: 0,
		cloud: 0,
		feelslike_c: 0,
		feelslike_f: 0,
		vis_km: 0,
		vis_miles: 0,
		uv: 0,
		gust_mph: 0,
		gust_kph: 0,
		air_quality: {
			co: 0,
			no2: 0,
			o3: 0,
			so2: 0,
			pm2_5: 0,
			pm10: 0,
			"us-epa-index": 0,
			"gb-defra-index": 0,
		},
	},
});

interface CurrentWeatherProviderProps {
	children: React.ReactNode;
}

export const CurrentWeatherProvider = ({
	children,
}: CurrentWeatherProviderProps) => {
	const [currentWeather, setCurrentWeather] = useState({
		location: {
			name: "Sao Paulo",
			region: "Sao Paulo",
			country: "Brazil",
			lat: -23.53,
			lon: -46.62,
			tz_id: "America/Sao_Paulo",
			localtime_epoch: 1688131093,
			localtime: "2023-06-30 10:18",
		},
		current: {
			last_updated_epoch: 1688130900,
			last_updated: "2023-06-30 10:15",
			temp_c: 17,
			temp_f: 62.6,
			is_day: 1,
			condition: {
				text: "Partly cloudy",
				icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
				code: 1003,
			},
			wind_mph: 6.9,
			wind_kph: 11.2,
			wind_degree: 80,
			wind_dir: "E",
			pressure_mb: 1027,
			pressure_in: 30.33,
			precip_mm: 0,
			precip_in: 0,
			humidity: 72,
			cloud: 75,
			feelslike_c: 17,
			feelslike_f: 62.6,
			vis_km: 8,
			vis_miles: 4,
			uv: 5,
			gust_mph: 7.2,
			gust_kph: 11.5,
			air_quality: {
				co: 654,
				no2: 32.599998474121094,
				o3: 29.299999237060547,
				so2: 29.299999237060547,
				pm2_5: 17.299999237060547,
				pm10: 32,
				"us-epa-index": 2,
				"gb-defra-index": 2,
			},
		},
	});

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
