import { ForecastDay } from "../../../../interfaces/ForecastDay";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";
import { StyledClimatePreviewWeekly } from "./ClimatePreviewWeekly.style";

interface ClimatePreviewWeeklyProps {
	data: ForecastDay[];
}

export const ClimatePreviewWeekly = ({ data }: ClimatePreviewWeeklyProps) => {
	const currentDate = formatDateToYYYYMMDD(new Date());

	return (
		<>
			{data.map(({ date, day }, index) => {
				const { text, icon } = day.condition;
				const avgTemp = Math.round(day.avgtemp_c);

				const isCurrentDay = date === currentDate;
				const currentDay = new Date(date).toLocaleDateString("pt-BR", {
					day: "2-digit",
					month: "2-digit",
					weekday: "short",
					timeZone: "UTC",
				});

				return (
					<StyledClimatePreviewWeekly
						key={index}
						className={`${isCurrentDay ? "currentDay" : "previewDay"}`}
					>
						<div className="climate_preview_weekly_box climate_preview_weekly_box--flex-row">
							<p className="climate_preview_weekly_text climate_preview_weekly_text--capitalize">
								{currentDay.replace(",", " ")}
							</p>
						</div>
						<div className="climate_preview_weekly_box">
							<p className="climate_preview_weekly_text--2xl">{avgTemp}ºC</p>
						</div>
						<figure>
							<img
								src={`https:${icon}`}
								className="climate_preview_weekly_image"
								alt="weather condition icon"
							/>
						</figure>
						<div className="climate_preview_weekly_box">
							<p className="climate_preview_weekly_text">{text}</p>
						</div>
					</StyledClimatePreviewWeekly>
				);
			})}
		</>
	);
};
