import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { StyledClimateInformation } from "./ClimateInformation.style";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";
import { useContext } from "react";
import { ForecastWeatherContext } from "../../../../context/ForecastWeatherContext";

export const ClimateInformation = () => {
	const { location, current, forecast } = useContext(ForecastWeatherContext);

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

	const climateClassName = `${
		temp_c <= 10
			? "climate-info--snow"
			: temp_c <= 20
			? "climate-info--cloudy"
			: temp_c <= 30
			? "climate-info--sunny"
			: temp_c >= 39
			? "climate-info--hot"
			: ""
	}`;

	return (
		<StyledClimateInformation className={climateClassName}>
			<div className="climate-info__container">
				<p className="climate-info__location">{`${location.name}, ${location.country}`}</p>
				<p className="climate-info__temperature">{`${temp_c}`}ºC</p>
				<div className="climate-info__preview">
					<p className="climate-info__preview-temp">
						<span className="climate-info__preview-temp--icon">
							<FiArrowDown />
						</span>
						{`${minTemp}ºC`}
					</p>
					<p className="climate-info__preview-temp">
						<span className="climate-info__preview-temp--icon">
							<FiArrowUp />
						</span>
						{`${maxTemp}ºC`}
					</p>
				</div>
				<p className="climate-info__feelslike">{`Sensação Térmica: ${feelsLike}ºC`}</p>
			</div>
			<div className="climate-info__container">
				<figure>
					<img src={`http:${icon}`} alt="condition weather" />
				</figure>
				<p>{text}</p>
			</div>
		</StyledClimateInformation>
	);
};
