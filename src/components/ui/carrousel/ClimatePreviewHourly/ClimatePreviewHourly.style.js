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

	&.current-hour {
		background-color: var(--primary-color);
		color: var(--white);
	}

	&.preview-hour {
		background-color: var(--white);
		color: var(--black);
	}

	.hourly-box__hour,
	.hourly-box__temperature {
		font-family: var(--fontFamilyLato);
		font-size: var(--text-md);
		line-height: var(--line-height-md);
	}

	.hourly-box__image {
		width: 2.5rem;
		height: 2.5rem;
	}
`;
