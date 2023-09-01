import { styled } from "styled-components";

export const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const FlexContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.flex-item {
		flex: 1;
	}

	.flex-item:nth-child(3) {
		overflow: hidden;
	}

	@media screen and (min-width: 1024px) {
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1.75rem;

		.flex-item{
			flex: none;
		}

		.flex-item:nth-child(1),
		.flex-item:nth-child(3) {
			width: 48%;
		}

		.flex-item:nth-child(1) {
			order: 1;
		}

		.flex-item:nth-child(2) {
			order: 3;
			width: 100%;
		}

		.flex-item:nth-child(3) {
			order: 2;
		}

		.flex-item:nth-child(4) {
			order: 4;
			width: 100%;
		}
	}
`;
