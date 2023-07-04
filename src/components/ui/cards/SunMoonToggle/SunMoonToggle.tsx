import { StyledSunMoonToggle } from "./SunMoonToggle.style";
import { ForecastWeatherData } from "../../../../interfaces/ForecastWeatherData";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";
import { convertTo24HourFormat } from "../../../utils/hourConvertFormat";
import {
	WiMoonrise,
	WiMoonset,
	WiNightClear,
	WiSunrise,
	WiSunset,
} from "react-icons/wi";
import { FiChevronRight } from "react-icons/fi";

export const SunMoonToggle = ({ data }: ForecastWeatherData) => {
	const currentDate = formatDateToYYYYMMDD(new Date());
	const forecastDayFiltered = data.forecast.forecastday.filter(
		(element) => element.date === currentDate,
	)[0];

	if (!forecastDayFiltered) {
		return <div>Carregando...</div>;
	}

	const { astro } = forecastDayFiltered;

	const convertedSunrise = convertTo24HourFormat(astro.sunrise);
	const convertedSunset = convertTo24HourFormat(astro.sunset);
	const convertedMoonrise = convertTo24HourFormat(astro.moonrise);
	const convertedMoonset = convertTo24HourFormat(astro.moonset);
	const currentHour = new Date().getHours().toString();

	return (
		<StyledSunMoonToggle>
			{convertedSunrise <= currentHour && currentHour <= convertedSunset ? (
				<>
					<div className="astro__content--glassmorphism">
						<h3 className="astro__title">Nascer e pôr do Sol</h3>
					</div>
					<div className="astro__content">
						<div className="astro__info">
							<span className="astro__icon">
								<WiSunrise size={24} />
							</span>
							<p className="astro__text">{convertedSunrise}</p>
						</div>
						<div className="astro__info">
							<span className="astro__icon">
								<WiSunset size={24} />
							</span>
							<p className="astro__text">{convertedSunset}</p>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="astro__content--glassmorphism">
						<h3 className="astro__title">Nascer e pôr da Lua</h3>
					</div>
					<div className="astro__content">
						<div className="astro__info">
							<span className="astro__icon">
								<WiMoonrise size={24} />
							</span>
							<p className="astro__text">{convertedMoonrise}</p>
						</div>
						<div className="astro__moon-phase">
							<div className="astro__info--row">
								<span className="astro__icon">
									<WiNightClear size={24} />
								</span>
								<p className="astro__text">{astro.moon_phase}</p>
							</div>
							<div className="astro__info--row">
								<p className="astro__text">Luz refletida</p>
								<span className="astro__icon">
									<FiChevronRight />
								</span>
								<p className="astro__text">{astro.moon_illumination}</p>
							</div>
						</div>
						<div className="astro__info">
							<span>
								<WiMoonset size={24} />
							</span>
							<p className="astro__text">{convertedMoonset}</p>
						</div>
					</div>
				</>
			)}
		</StyledSunMoonToggle>
	);
};

export default SunMoonToggle;
