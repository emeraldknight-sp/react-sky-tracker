import { css, styled } from "styled-components";

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

	// This code must be uncommented when
	// implementing the sidebar for the tablet version

	/* @media (min-width: 768px) {
		display: none;
	} */
`;

export const StyledButtonNotifications = styled.button<{
	hasNotifications?: boolean;
}>`
	background-color: var(--white);
	border: none;
	width: 32px;
	height: 32px;
	cursor: pointer;
	padding: 0.25rem;
	border-radius: 50%;

	svg {
		color: ${(props) =>
			props.hasNotifications ? "var(--primary-color)" : "var(--charcoal)"};

		${(props) =>
			props.hasNotifications &&
			css`
				animation: ring 2s 0.7s ease-in-out infinite;
				transform-origin: 50% 2s;

				@keyframes ring {
					0% {
						transform: rotateZ(0);
					}
					1% {
						transform: rotateZ(28deg);
					}
					3% {
						transform: rotateZ(-26deg);
					}
					5% {
						transform: rotateZ(32deg);
					}
					7% {
						transform: rotateZ(-30deg);
					}
					9% {
						transform: rotateZ(28deg);
					}
					11% {
						transform: rotateZ(-26deg);
					}
					13% {
						transform: rotateZ(24deg);
					}
					15% {
						transform: rotateZ(-22deg);
					}
					17% {
						transform: rotateZ(20deg);
					}
					19% {
						transform: rotateZ(-18deg);
					}
					21% {
						transform: rotateZ(16deg);
					}
					23% {
						transform: rotateZ(-14deg);
					}
					25% {
						transform: rotateZ(12deg);
					}
					27% {
						transform: rotateZ(-10deg);
					}
					29% {
						transform: rotateZ(8deg);
					}
					31% {
						transform: rotateZ(-6deg);
					}
					33% {
						transform: rotateZ(4deg);
					}
					35% {
						transform: rotateZ(-2deg);
					}
					37% {
						transform: rotateZ(0deg);
					}
					100% {
						transform: rotateZ(0);
					}
				}
			`}
	}
`;
