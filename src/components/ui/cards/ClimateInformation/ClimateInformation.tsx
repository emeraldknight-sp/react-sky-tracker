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

	const termsToCheck = [
		"chuva",
		"neve",
		"gelo",
		"tempestade",
		"granizo",
		"vento",
	];

	const isRaining = termsToCheck.some((term) =>
		text.toLowerCase().includes(term),
	);

	const temperatureClassMap = {
		cold: "climate-info--snow",
		cool: "climate-info--cloudy",
		warm: "climate-info--sunny",
		hot: "climate-info--hot",
		rain: "climate-info--rain",
		default: "climate-info--default",
	};

	const getTemperatureClassName = (temperature: number, rain: boolean) => {
		if (0 <= temperature && temperature <= 10) {
			return temperatureClassMap.cold;
		} else if (temperature && rain) {
			return temperatureClassMap.rain;
		} else if (11 <= temperature && temperature <= 20) {
			return temperatureClassMap.cool;
		} else if (21 <= temperature && temperature <= 30) {
			return temperatureClassMap.warm;
		} else if (31 <= temperature && temperature <= 39) {
			return temperatureClassMap.hot;
		} else {
			return temperatureClassMap.default;
		}
	};

	const climateClassName = getTemperatureClassName(temp_c, isRaining);

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
