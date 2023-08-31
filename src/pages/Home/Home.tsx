import { useContext } from "react";

import { Header } from "../../components/layout/Header/";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";

import { ClimateInformation } from "../../components/ui/cards/ClimateInformation/ClimateInformation";
import { ClimateDetails } from "../../components/ui/cards/ClimateDetails";
import { ClimatePreview } from "../../components/ui/cards/ClimatePreview";
import { SunMoonToggle } from "../../components/ui/cards/SunMoonToggle";

import { mockForecast } from "../../mock/mockForecast";
import { mockCurrent } from "../../mock/mockCurrent";

import { LocationContext } from "../../context/LocationContext";
import { ForecastWeatherContext } from "../../context/ForecastWeatherContext";
import { CurrentWeatherContext } from "../../context/CurrentWeatherContext";

import { ElementGroupHome, StyledHome } from "./Home.style";
import { Loading } from "../../components/layout/Loading";

export const Home = () => {
	const location = useContext(LocationContext);
	const forecastWeather = useContext(ForecastWeatherContext);
	const currentWeather = useContext(CurrentWeatherContext);

	console.log("LOCATION", location);
	console.log("FORECAST", forecastWeather);
	console.log("CURRENT", currentWeather);

	return (
		<StyledHome>
			<Header />
			<Main>
				{location ? (
					<ElementGroupHome>
						<div className="content--box-1">
							<ClimateInformation data={mockForecast} />
						</div>
						<div className="content--box-2">
							<ClimateDetails data={mockCurrent} />
						</div>
						<div className="content--box-3">
							<ClimatePreview data={mockForecast} />
						</div>
						<div className="content--box-4">
							<SunMoonToggle data={mockForecast} />
						</div>
					</ElementGroupHome>
				) : (
					<Loading />
				)}
			</Main>
			<Navbar />
		</StyledHome>
	);
};
