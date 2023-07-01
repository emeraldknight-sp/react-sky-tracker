import { styled } from "styled-components";

export const StyledClimatePreview = styled.div`
	.content {
		padding: 1rem 0;
	}

	.climate_preview_head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.climate_preview_title {
			font-family: var(--fontFamilyLato);
			font-size: var(--text-lg);
			line-height: var(--line-height-lg);
		}

		.button {
			font-family: var(--fontFamilyLato);
			font-size: var(--text-md);
			line-height: var(--line-height-md);
			height: 3rem;
			cursor: pointer;
			padding: 0.625rem;
			border-radius: 1rem;
		}

		.button--text {
			height: 0;
			padding: 0;
			background-color: var(--white);
			color: var(--primary-color);
			text-decoration: underline;
		}
	}

	.climate_preview_body {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		overflow-x: auto;
		padding: 0 0 1rem;

		.climate_preview_list {
			display: flex;
			flex-direction: row;
			gap: 1rem;
			width: 100%;
			overflow-x: auto;
			padding: 1rem 0;
		}
	}
`;
