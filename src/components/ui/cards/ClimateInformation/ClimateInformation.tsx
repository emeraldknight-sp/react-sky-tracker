import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { StyledClimateInformation } from "./ClimateInformation.style";
import { ForecastWeatherData } from "../../../../interfaces/ForecastWeatherData";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";

export const ClimateInformation = ({ data }: ForecastWeatherData) => {
	const { location, current, forecast } = data;
	const currentDate = formatDateToYYYYMMDD(new Date)
	const minTemp = Math.round(Number(forecast.forecastday.find((element) => (element.date === currentDate))?.day.mintemp_c));
	const maxTemp = Math.round(Number(forecast.forecastday.find((element) => (element.date === currentDate))?.day.maxtemp_c));
	const feelsLike = Math.round(current.feelslike_c)
	const {icon, text} = current.condition

	return (
		<StyledClimateInformation>
			<div className="content">
				<p className="location">{`${location.name}, ${location.country}`}</p>
				<p className="temperature">{`${current.temp_c}`}ºC</p>
				<div className="preview">
					<div className="preview_temp">
						<FiTrendingDown />
						{`Mín: ${minTemp}ºC`}
					</div>
					<div className="preview_temp">
						<FiTrendingUp />
						{`Máx: ${maxTemp}ºC`}
					</div>
				</div>
				<div>
					<p className="feelslike">{`Sensação Térmica: ${feelsLike}ºC`}</p>
				</div>
			</div>
			<div className="content content--without-gap">
				<figure>
					<img src={`http:${icon}`} alt="condition weather" />
				</figure>
				<p>{text}</p>
			</div>
		</StyledClimateInformation>
	);
};
