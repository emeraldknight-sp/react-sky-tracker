import { StyledClimatePreviewHourly } from "./ClimatePreviewHourly.style";
import { Forecast } from "../../../../interfaces/Forecast";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";

interface ClimatePreviewHourlyProps {
	data: Forecast;
}

export const ClimatePreviewHourly = ({ data }: ClimatePreviewHourlyProps) => {
	const currentDate = formatDateToYYYYMMDD(new Date());
	const forecastdayFiltered = data.forecastday.filter(
		(forecast) => forecast.date === currentDate,
	)[0];

	if (!forecastdayFiltered) {
		return <div>Carregando...</div>;
	}

	const { hour } = forecastdayFiltered;

	const locale = "pt-BR";
	const options: Intl.DateTimeFormatOptions = {
		hour: "2-digit",
		minute: "2-digit",
	};

	const isSameHour = (date1: Date, date2: Date) => {
		return date1.getHours() === date2.getHours();
	};

	const now = new Date();

	return (
		<>
			{hour.map((element, index) => {
				const elementHour = new Date(element.time);
				const temp_c = Math.round(element.temp_c);
				const { icon } = element.condition;

				const whatTimeIsIt = isSameHour(now, elementHour);

				return (
					<StyledClimatePreviewHourly
						key={index}
						className={`${whatTimeIsIt ? "current-hour" : "preview-hour"}`}
					>
						<p className="hourly-box__hour">
							{elementHour.toLocaleString(locale, options)}
						</p>
						<figure className="hourly-box__figure">
							<img
								src={`https:${icon}`}
								className="hourly-box__image"
								alt="weather condition icon"
							/>
						</figure>
						<p className="hourly-box__temperature">{temp_c}ºC</p>
					</StyledClimatePreviewHourly>
				);
			})}
		</>
	);
};
