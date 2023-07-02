import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: var(--white);
	border-top: 2px solid var(--primary-color);
	width: 100vw;
	height: 65px;

	.navbar__list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 90vw;

		.navbar__item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 48px;
			height: 48px;
			border-radius: var(--rounded-full);
			box-shadow: var(--shadow-md);

			.navbar__link {
				color: var(--primary-color);
			}
		}
	}
`;
