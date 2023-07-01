import { styled } from "styled-components";

export const StyledMain = styled.main`
	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.main_sun_moon_toggle {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		gap: 0.5rem;
		box-shadow: var(--shadow-md);
		border-radius: var(--rounded-lg);
		padding: 1rem 0;

		@media (min-width: 768px) {
			width: 288px;
		}

		.time_container {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 4px;
		}
	}
`;
