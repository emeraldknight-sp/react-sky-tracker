import { ForecastDay } from "../../../../interfaces/ForecastDay";
import { Loading } from "../../../layout/Loading";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";
import { StyledClimatePreviewWeekly } from "./ClimatePreviewWeekly.style";

interface ClimatePreviewWeeklyProps {
	data: ForecastDay[];
}

export const ClimatePreviewWeekly = ({ data }: ClimatePreviewWeeklyProps) => {
	const currentDate = formatDateToYYYYMMDD(new Date());

	if (!data) {
		return <Loading />;
	}

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
						className={`${isCurrentDay ? "current-day" : "preview-day"}`}
					>
						<div className="weekly-box weekly-box--flex-row">
							<p className="weekly-box__text weekly-box__text--capitalize">
								{currentDay.replace(",", " ")}
							</p>
						</div>
						<div className="weekly-box">
							<p className="weekly-box__text--2xl">{avgTemp}ºC</p>
						</div>
						<figure>
							<img
								src={`https:${icon}`}
								className="weekly-box__image"
								alt="weather condition icon"
							/>
						</figure>
					</StyledClimatePreviewWeekly>
				);
			})}
		</>
	);
};
