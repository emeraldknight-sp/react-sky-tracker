import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { StyledClimateInformation } from "./ClimateInformation.style";
import { ForecastWeatherData } from "../../../../interfaces/ForecastWeatherData";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";

export const ClimateInformation = ({ data }: ForecastWeatherData) => {
	const { location, current, forecast } = data;
	const currentDate = formatDateToYYYYMMDD(new Date());
	const minTemp = Math.round(
		Number(
			forecast.forecastday.find((element) => element.date === currentDate)?.day
				.mintemp_c,
		),
	);
	const maxTemp = Math.round(
		Number(
			forecast.forecastday.find((element) => element.date === currentDate)?.day
				.maxtemp_c,
		),
	);
	const temp_c = Math.round(current.temp_c);
	const feelsLike = Math.round(current.feelslike_c);
	const { icon, text } = current.condition;

	return (
		<StyledClimateInformation>
			<div className="climate-info">
				<p className="climate-info__location">{`${location.name}, ${location.country}`}</p>
				<p className="climate-info__temperature">{`${temp_c}`}ºC</p>
				<div className="climate-info__preview">
					<p className="climate-info__preview-temp">
						<span className="climate-info__preview-temp--icon">
							<FiTrendingDown />
						</span>
						{`Mín: ${minTemp}ºC`}
					</p>
					<p className="climate-info__preview-temp">
						<span className="climate-info__preview-temp--icon">
							<FiTrendingUp />
						</span>
						{`Máx: ${maxTemp}ºC`}
					</p>
				</div>
				<p className="climate-info__feelslike">{`Sensação Térmica: ${feelsLike}ºC`}</p>
			</div>
			<div className="climate-info">
				<figure>
					<img src={`http:${icon}`} alt="condition weather" />
				</figure>
				<p>{text}</p>
			</div>
		</StyledClimateInformation>
	);
};
