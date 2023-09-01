import { styled } from "styled-components";

export const StyledClimatePreview = styled.div`
	.climate-preview__head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.climate-preview__title {
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

	.climate-preview__body {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		
		.climate-preview__list {
			display: flex;
			flex-direction: row;
			gap: 1rem;
			width: 100%;
			padding: 0.5rem;
		}

		overflow-x: scroll;
	}

	::-webkit-scrollbar {
		width: 20px;
	}

	::-webkit-scrollbar-track {
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		border: 5px solid var(--white);
		background: var(--base-gray);
		border-radius: 10px;
	}
`;
