import styled from "styled-components";

export const StyledRegister = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	max-width: 288px;
	margin: 0 auto;

	.page-title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

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

export const StyledRegisterForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	width: 100%;
`;

export const StyledInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	&.flex-row {
		flex-direction: row;
	}
`;

export const StyledSocialRegisterButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;
