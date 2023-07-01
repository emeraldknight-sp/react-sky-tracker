import { styled } from "styled-components";

export const StyledClimateDetails = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	justify-items: center;
	gap: 1rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(1, 1fr);
		height: 6rem;
	}

	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem;
	padding: 1rem;

	.text {
		font-family: var(--fontFamilyLato);
		text-align: center;
	}

	.text_data {
		font-size: var(--text-sm);
	}

	.text_description {
		font-size: var(--text-xs);
	}
`;
