import { styled } from "styled-components";

export const StyledClimatePreviewHourly = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem;
	border-radius: var(--rounded-xl);
	box-shadow: var(--shadow-md);

	&.currentHour {
		background-color: var(--primary-color);
		color: var(--white);
	}

	&.previewHour {
		background-color: var(--white);
		color: var(--black);
	}

	.climate_preview_hourly_hour,
	.climate_preview_hourly_temperature {
		font-family: var(--fontFamilyLato);
		font-size: var(--text-md);
		line-height: var(--line-height-md);
	}

	.climate_preview_hourly_image {
		width: 2.5rem;
		height: 2.5rem;
	}
`;
