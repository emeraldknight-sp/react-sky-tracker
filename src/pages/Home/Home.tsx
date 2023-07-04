import { useEffect, useState } from "react";

import { Header } from "../../components/layout/Header/";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";

import { ClimateInformation } from "../../components/ui/cards/ClimateInformation/ClimateInformation";
import { ClimateDetails } from "../../components/ui/cards/ClimateDetails";
import { ClimatePreview } from "../../components/ui/cards/ClimatePreview";
import { SunMoonToggle } from "../../components/ui/cards/SunMoonToggle";

import { mockForecast } from "../../mock/mockForecast";
import { mockCurrent } from "../../mock/mockCurrent";

import { StyledHome } from "./Home.style.js";
import { getLocation } from "../../api/getLocation";
import { getForecastWeatherData } from "../../api/getForecastWeather";
import { getCurrentWeatherData } from "../../api/getCurrentWeather";

export const Home = () => {
	const [locationData, setLocationData] = useState(null);
	const [forecastWeatherData, setForecastWeatherData] = useState(null);
	const [currentWeatherData, setCurrentWeatherData] = useState(null);

	const fetchLocationData = async () => {
		try {
			const data = await getLocation();
			setLocationData(data);
		} catch (error) {
			console.error("Erro ao obter dados de localização:", error);
		}
	};

	useEffect(() => {
		fetchLocationData();
		const intervalId = setInterval(fetchLocationData, 5000);

		return () => clearInterval(intervalId);
	}, []);

	const fetchForecastWeatherData = async () => {
		if (locationData) {
			try {
				const data = await getForecastWeatherData(locationData);
				setForecastWeatherData(data);
			} catch (error) {
				console.error("Erro ao obter dados de previsão do tempo:", error);
			}
		}
	};

	useEffect(() => {
		if (locationData) {
			fetchForecastWeatherData();
		}
	}, [locationData]);

	const fetchCurrentWeatherData = async () => {
		if (locationData) {
			try {
				const data = await getCurrentWeatherData(locationData);
				setCurrentWeatherData(data);
			} catch (error) {
				console.error("Erro ao obter dados de previsão do tempo:", error);
			}
		}
	};

	useEffect(() => {
		if (locationData) {
			fetchCurrentWeatherData();
		}
	}, [locationData]);

	return (
		<>
			<Header />
			<Main>
				<StyledHome>
					<div className="content--box-1">
						<ClimateInformation data={forecastWeatherData || mockForecast} />
					</div>
					<div className="content--box-2">
						<ClimateDetails data={currentWeatherData || mockCurrent} />
					</div>
					<div className="content--box-3">
						<ClimatePreview data={forecastWeatherData || mockForecast} />
					</div>
					<div className="content--box-4">
						<SunMoonToggle data={forecastWeatherData || mockForecast} />
					</div>
				</StyledHome>
			</Main>
			<Navbar />
		</>
	);
};
