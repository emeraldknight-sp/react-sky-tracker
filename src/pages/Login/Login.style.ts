import styled from "styled-components";

export const StyledLogin = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	max-width: 288px;
	margin: 0 auto;
	padding: 1rem 0;

	h2 {
		font-size: var(--text-xl);
		font-family: var(--fontFamilyLato);
		font-weight: 600;
		text-align: center;
	}

	label,
	a {
		font-size: var(--text-sm);
		font-family: var(--fontFamilyLato);
		line-height: var(--line-height-sm);
		font-weight: 400;
	}

	label:nth-child(1) {
		font-weight: 600;
	}

	input {
		background-color: var(--gray-2);
		padding: 0.75rem 1rem;
		outline: none;
		border-radius: 0.5rem;
	}

	a {
		color: var(--charcoal);
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
`;

export const StyledInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	&.row {
		flex-direction: row;
	}
`;

export const StyledLoginButtonGroup = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`


