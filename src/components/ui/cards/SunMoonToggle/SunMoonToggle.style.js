import { styled } from "styled-components";

export const StyledSunMoonToggle = styled.div`
	background-color: var(--primary-color);
	border-radius: var(--rounded-md);
	color: var(--white);

	.astro__content--glassmorphism {
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px);
		padding: 1rem;

	}

	.astro__title {
		font-size: var(--text-lg);
		line-height: var(--line-height-lg);
		font-family: var(--fontFamilyLato);
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px);
		border-radius: var(--rounded-md);
		padding: 1rem;
	}

	.astro__content {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding: 1rem;

		.astro__info {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: 0.125rem;
		}

		.astro__info--row {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

		.astro__text {
			font-family: var(--fontFamilyLato);
			font-size: var(--text-md);
			line-height: var(--line-height-md);
		}

		.astro__icon {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.astro__moon-phase {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.125rem;
		}
	}
`;
