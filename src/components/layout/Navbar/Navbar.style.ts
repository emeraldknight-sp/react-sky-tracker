import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;

	background-color: var(--white);
	border-top: 2px solid var(--primary-color);

	width: 100%;
	padding: 8px 0;

	.navbar__list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 90vw;
		margin: 0 auto;

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

	@media (min-width: 768px) {
		.navbar__list {
			width: 50vw;
		}
	}

	@media (min-width: 1024px) {
		display: none;
	}
`;
