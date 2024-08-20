import { ClimatePreviewHourly } from "../../carrousel/ClimatePreviewHourly";
import { ClimatePreviewWeekly } from "../../carrousel/ClimatePreviewWeekly";
import { StyledClimatePreview } from "./ClimatePreview.style";
import { useState } from "react";

export const ClimatePreview = ({ forecast }: ClimatePreviewProps) => {
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
						<ClimatePreviewHourly forecast={forecast} />
					) : (
						<ClimatePreviewWeekly forecast={forecast} />
					)}
				</ul>
			</div>
		</StyledClimatePreview>
	);
};
