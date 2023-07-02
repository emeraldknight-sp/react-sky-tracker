import { styled } from "styled-components";

export const StyledClimateDetails = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	justify-items: center;
	gap: 1rem;
	
	background-color: var(--white);
	color: var(--black);

	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
	border-radius: var(--rounded-md);
	padding: 1rem;

	.climate-item {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;

		max-width: 100px;
	}

	.climate-item__text {
		font-family: var(--fontFamilyLato);
		text-align: center;
	}

	.climate-item__text--data {
		font-size: var(--text-sm);
	}

	.climate-item__text--description {
		font-size: var(--text-xs);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(1, 1fr);
		/* width: 35rem; */
		height: 8rem;

		.climate-item {
			justify-content: center;
		}
	}
`;
