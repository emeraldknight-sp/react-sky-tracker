import { styled } from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--white);
	width: calc(100% - 32px);
	height: 100%;
	padding: 1rem;
	border-bottom: 1px solid var(--base-gray);

	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.25rem;
		text-decoration: none;

		img {
			max-width: 32px;
		}

		h1 {
			font-size: var(--text-xl);
			font-weight: bold;
			color: var(--charcoal);
		}
	}

	button {
		background-color: var(--white);
		border: none;
		width: 32px;
		height: 32px;
		cursor: pointer;
		padding: 0.25rem;
		border-radius: 50%;
	}

	// This code must be uncommented when
	// implementing the sidebar for the tablet version

	/* @media (min-width: 768px) {
		display: none;
	} */
`;
