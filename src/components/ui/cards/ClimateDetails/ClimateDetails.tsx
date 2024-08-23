import {
	Cloud,
	CloudRain,
	Droplet,
	Sun,
	Thermometer,
	Waves,
} from "lucide-react";
import { StyledClimateDetails } from "./ClimateDetails.style";

export const ClimateDetails = ({ current }: ClimateDetailsProps) => {
	const items = [
		{
			icon: <Cloud size={24} />,
			data: `${current.cloud}%`,
			description: "Nuvens",
		},
		{
			icon: <Thermometer size={24} />,
			data: current.pressure_mb,
			description: "Pressão ATM",
		},
		{
			icon: <Sun size={24} />,
			data: current.uv,
			description: "Raios UV",
		},
		{
			icon: <CloudRain size={24} />,
			data: current.humidity,
			description: "Umidade relativa do ar",
		},
		{
			icon: <Waves size={24} />,
			data: current.wind_kph,
			description: "Veloc. do vento",
		},
		{
			icon: <Droplet size={24} />,
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
