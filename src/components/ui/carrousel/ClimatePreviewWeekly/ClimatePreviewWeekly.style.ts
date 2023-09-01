import { styled } from "styled-components";

export const StyledClimatePreviewWeekly = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;
	flex: 1;

	min-width: 100px;

	font-family: var(--fontFamilyLato);
	text-align: center;

	padding: 1rem 1rem;
	border-radius: var(--rounded-md);
	box-shadow: var(--shadow-md);

	&.current-day {
		background-color: var(--primary-color);
		color: var(--white);
	}

	&.preview-day {
		background-color: var(--white);
		color: var(--black);
	}

	.weekly-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		.weekly-box__text {
			font-size: var(--text-md);
			font-weight: 400;
			line-height: var(--line-height-md);
		}

		.weekly-box__text--2xl {
			font-size: var(--text-2xl);
			font-weight: 400;
			line-height: var(--line-height-2xl);
		}
	}

	.weekly-box--flex-row {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;

		.weekly-box__text--capitalize {
			text-transform: capitalize;
		}
	}

	.weekly-box__image {
		width: 2.5rem;
		height: 2.5rem;
	}
`;
