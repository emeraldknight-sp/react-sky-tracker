import { StyledClimatePreviewHourly } from "./ClimatePreview.style";
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
				const temp_c = Math.round(element.temp_c)
				const { icon } = element.condition
				
				const whatTimeIsIt = isSameHour(now, elementHour);
				
				return (
					<StyledClimatePreviewHourly
						key={index}
						className={`${whatTimeIsIt ? "currentHour" : "previewHour"}`}
					>
						<p className="climate_preview_hourly_hour">
							{elementHour.toLocaleString(locale, options)}
						</p>
						<figure className="climate_preview_hourly_figure">
							<img
								src={`https:${icon}`}
								className="climate_preview_hourly_image"
								alt="weather condition icon"
							/>
						</figure>
						<p className="climate_preview_hourly_temperature">
							{temp_c}ºC
						</p>
					</StyledClimatePreviewHourly>
				);
			})}
		</>
	);
};