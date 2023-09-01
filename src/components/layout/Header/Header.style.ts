import { styled } from "styled-components";

export const StyledHeader = styled.header`
	background-color: var(--white);
	max-width: 100vw;
	padding: 1rem 0;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	border-bottom: 1px solid var(--base-gray);

	.header__button__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--white);
		width: 2.5rem;
		height: 2.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		border-radius: 20px;
		cursor: pointer;
	}
`;

export const HeaderContainer = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 90vw;
	margin: 0 auto;
`;