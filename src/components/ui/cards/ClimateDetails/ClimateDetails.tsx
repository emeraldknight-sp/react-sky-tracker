import {
	FiCloudRain,
	FiDroplet,
	FiSun,
	FiThermometer,
	FiWind,
} from "react-icons/fi";
import { StyledClimateDetails } from "./ClimateDetails.style";
import { MdWaves } from "react-icons/md";
import { airQualityAverage } from "../../../utils/airQualityAverage";
import { CurrentWeatherData } from "../../../../interfaces/CurrentWeatherData";

export const ClimateDetails = ({ data }: CurrentWeatherData) => {
	const { current } = data;

	const aqi = airQualityAverage(current.air_quality);

	const items = [
		{
			icon: <FiWind size={24} />,
			data: aqi,
			description: "Qualidade do ar",
		},
		{
			icon: <FiThermometer size={24} />,
			data: current.pressure_mb,
			description: "Pressão ATM",
		},
		{
			icon: <FiSun size={24} />,
			data: current.uv,
			description: "Raios UV",
		},
		{
			icon: <FiCloudRain size={24} />,
			data: current.humidity,
			description: "Umidade relativa do ar",
		},
		{
			icon: <MdWaves size={24} />,
			data: current.wind_kph,
			description: "Veloc. do vento",
		},
		{
			icon: <FiDroplet size={24} />,
			data: current.precip_mm,
			description: "Volume de chuva",
		},
	];

	return (
		<StyledClimateDetails>
			{items.map((item, index) => (
				<div key={index} className="climate-item">
					<span className="climate-item__icon">{item.icon}</span>
					<p className="climate-item__text climate-item__text--data">
						{item.data}
					</p>
					<p className="climate-item__text climate-item__text--description">
						{item.description}
					</p>
				</div>
			))}
		</StyledClimateDetails>
	);
};
