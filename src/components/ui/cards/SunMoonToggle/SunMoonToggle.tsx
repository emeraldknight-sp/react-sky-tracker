import { FiSunrise, FiSunset } from "react-icons/fi";
import { StyledSunMoonToggle } from "./SunMoonToggle.style";
import { ForecastWeatherData } from "../../../../interfaces/ForecastWeatherData";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";

export const SunMoonToggle = ({ data }: ForecastWeatherData) => {
	const { forecastday } = data.forecast;
	// const currentDay = new Date()
	// const currentDayFormatted = formatDateToYYYYMMDD(currentDay)
	// console.log(forecastday)

	// forecastday.map((element, index) => {
	//   console.log(element.date, currentDayFormatted)
	//   console.log(element.date === currentDayFormatted)
	// })

	return (
		<StyledSunMoonToggle>
			<div className="time_container">
				<span>
					<FiSunrise size={24} />
				</span>
				<p className="text">Nascer do Sol</p>
				<p className="text">00h00</p>
			</div>
			<div className="time_container">
				<span>
					<FiSunset size={24} />
				</span>
				<p className="text">Pôr do Sol</p>
				<p className="text">05h00</p>
			</div>
		</StyledSunMoonToggle>
	);
};
