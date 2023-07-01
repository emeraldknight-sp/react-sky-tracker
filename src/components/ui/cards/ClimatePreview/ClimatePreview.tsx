import { useState } from "react";
import { ForecastWeatherData } from "../../../../interfaces/ForecastWeatherData";
import { ClimatePreviewHourly } from "../../carrousel/ClimatePreviewHourly";
import { StyledClimatePreview } from "./ClimatePreview.style";
import { ClimatePreviewWeekly } from "../../carrousel/ClimatePreviewWeekly";

export const ClimatePreview = ({ data }: ForecastWeatherData) => {
	const { forecast } = data;
	const { forecastday } = forecast;
	const [showHourly, setShowHourly] = useState(true);

	const togglePreview = () => {
		setShowHourly(!showHourly);
	};

	return (
		<StyledClimatePreview>
			<div className="climate_preview_head">
				<p className="climate_preview_title">
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
			<div className="climate_preview_body">
				<ul className="climate_preview_list">
					{showHourly ? (
						<ClimatePreviewHourly data={forecast} />
					) : (
						<ClimatePreviewWeekly data={forecastday} />
					)}
				</ul>
			</div>
		</StyledClimatePreview>
	);
};
