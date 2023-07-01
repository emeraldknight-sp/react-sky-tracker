import { styled } from "styled-components";

export const StyledClimatePreviewWeekly = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;
	flex: 1;

	min-width: 100px;

	font-family: var(--fontFamilyLato);
	text-align: center;

	padding: 1rem 1rem;
	border-radius: var(--rounded-md);
	box-shadow: var(--shadow-md);

	&.currentDay {
		background-color: var(--primary-color);
		color: var(--white);
	}

	&.previewDay {
		background-color: var(--white);
		color: var(--black);
	}

	.climate_preview_weekly_box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		.climate_preview_weekly_text {
			font-size: var(--text-md);
			line-height: var(--line-height-md);
		}

		.climate_preview_weekly_text--2xl {
			font-size: var(--text-2xl);
			line-height: var(--line-height-2xl);
		}
	}

	.climate_preview_weekly_box--flex-row {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;

		.climate_preview_weekly_text--capitalize {
			text-transform: capitalize;
		}
	}

	.climate_preview_weekly_image {
		width: 2.5rem;
		height: 2.5rem;
	}
`;
