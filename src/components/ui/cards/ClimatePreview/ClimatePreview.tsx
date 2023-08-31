import { useContext, useState } from "react";
import { ClimatePreviewHourly } from "../../carrousel/ClimatePreviewHourly";
import { StyledClimatePreview } from "./ClimatePreview.style";
import { ClimatePreviewWeekly } from "../../carrousel/ClimatePreviewWeekly";
import { ForecastWeatherContext } from "../../../../context/ForecastWeatherContext";

export const ClimatePreview = () => {
	const forecast = useContext(ForecastWeatherContext);
	const [showHourly, setShowHourly] = useState(true);

	const togglePreview = () => {
		setShowHourly(!showHourly);
	};

	return (
		<StyledClimatePreview>
			<div className="climate-preview__head">
				<p className="climate-preview__title">
					{showHourly ? "Próximas horas" : "Próximos dias"}
				</p>
				<button
					type="button"
					className="button button--text"
					onClick={togglePreview}
				>
					{showHourly ? "Próximos dias" : "Próximas horas"}
				</button>
			</div>
			<div className="climate-preview__body">
				<ul className="climate-preview__list">
					{showHourly ? (
						<ClimatePreviewHourly data={forecast.forecast} />
					) : (
						<ClimatePreviewWeekly data={forecast.forecast.forecastday} />
					)}
				</ul>
			</div>
		</StyledClimatePreview>
	);
};
