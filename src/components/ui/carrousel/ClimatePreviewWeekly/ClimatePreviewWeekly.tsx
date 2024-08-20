import { LoadingLottie } from "../../../animations/LoadingLottie";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";
import { StyledClimatePreviewWeekly } from "./ClimatePreviewWeekly.style";

export const ClimatePreviewWeekly = ({ forecast }: ClimatePreviewProps) => {
	const currentDate = formatDateToYYYYMMDD(new Date());

	if (!forecast) {
		return <LoadingLottie />;
	}

	return (
		<>
			{forecast.forecastday.map(({ date, day }, index) => {
				const { icon } = day.condition;
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
