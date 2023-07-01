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
import { ClimateItem } from "../ClimateItem";

export const ClimateDetails = ({ data }: CurrentWeatherData) => {
	const { current } = data;

	const aqi = airQualityAverage(current.air_quality);

	return (
		<StyledClimateDetails>
			<ClimateItem>
				<span>
					<FiWind size={24} />
				</span>
				<p className="text text_data">{aqi}</p>
				<p className="text text_description">Qualidade do ar</p>
			</ClimateItem>
			<ClimateItem>
				<span>
					<FiThermometer size={24} />
				</span>
				<span className="text text_data">{current.pressure_mb}</span>
				<span className="text text_description">Pressão ATM</span>
			</ClimateItem>
			<ClimateItem>
				<span>
					<FiSun size={24} />
				</span>
				<span className="text text_data">{current.uv}</span>
				<span className="text text_description">Raios UV</span>
			</ClimateItem>
			<ClimateItem>
				<span>
					<FiCloudRain size={24} />
				</span>
				<span className="text text_data">{current.humidity}</span>
				<span className="text text_description">Umidade relativa do ar</span>
			</ClimateItem>
			<ClimateItem>
				<span>
					<MdWaves size={24} />
				</span>
				<span className="text text_data">{current.wind_kph}</span>
				<span className="text text_description">Veloc. do vento</span>
			</ClimateItem>
			<ClimateItem>
				<span>
					<FiDroplet size={24} />
				</span>
				<span className="text text_data">{current.precip_mm}</span>
				<span className="text text_description">Volume de chuva</span>
			</ClimateItem>
		</StyledClimateDetails>
	);
};
