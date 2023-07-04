import { styled } from "styled-components";

export const StyledHeader = styled.header`
	padding: 1rem;

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.header__button__icon {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: var(--white);
		width: 2.5rem;
		height: 2.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		border-radius: 20px;
	}
`;
