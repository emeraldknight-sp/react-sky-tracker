import {
	FiCloudRain,
	FiDroplet,
	FiSun,
	FiThermometer,
	FiCloud,
} from "react-icons/fi";
import { StyledClimateDetails } from "./ClimateDetails.style";
import { MdWaves } from "react-icons/md";
import { useContext } from "react";
import { CurrentWeatherContext } from "../../../../context/CurrentWeatherContext";

export const ClimateDetails = () => {
	const { current } = useContext(CurrentWeatherContext);

	const items = [
		{
			icon: <FiCloud size={24} />,
			data: `${current.cloud}%`,
			description: "Nuvens",
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
