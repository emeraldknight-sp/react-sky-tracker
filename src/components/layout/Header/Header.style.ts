import { styled } from "styled-components";

export const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	z-index: 100;

	background-color: var(--white);
	max-width: 100vw;
	padding: 1rem 0;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

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

export const HeaderContent = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;