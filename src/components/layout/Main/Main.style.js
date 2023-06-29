import { styled } from "styled-components";

export const StyledMain = styled.main`
	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.main_climate_information {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 1rem;
		height: 9rem;
		background-color: var(--snow);
		border-radius: 0.375rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		color: var(--white);

		.flex-col {
			display: flex;
			flex-direction: column;
		}

		.gap-1 {
			gap: 4px;
		}

		.gap-2 {
			gap: 8px;
		}

		.gap-3 {
			gap: 16px;
		}

		.gap-4 {
			gap: 32px;
		}

		.flex-row {
			display: flex;
			flex-direction: row;
		}

		.align-items {
			align-items: center;
		}

		.justify-content {
			justify-content: center;
		}
	}

	.main_climate_details {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		justify-items: center;
		gap: 1rem;

		@media (min-width: 768px) {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: repeat(1, 1fr);
			height: 6rem;
		}

		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
		border-radius: 0.5rem;
		padding: 1rem;

		.climate_item {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			max-width: 100px;

			@media (min-width: 768px) {
				justify-content: center;
			}

			align-items: center;
			gap: 8px;
		}

		.text {
			font-family: var(--fontFamilyLato);
			text-align: center;
		}

		.text_data {
			font-size: var(--text-sm);
		}

		.text_description {
			font-size: var(--text-xs);
		}

		.gap-1 {
			gap: 4px;
		}

		.gap-2 {
			gap: 8px;
		}
	}

	.main_climate_preview {
		.content {
			padding: 1rem 0;
		}

		.climate_preview_title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.button {
				height: 48px;
				cursor: pointer;
				padding: 10px;
				border: 1px solid var(--transparent);
				border-radius: 16px;
			}

			.button--text {
				height: 0;
				padding: 0;
				background-color: var(--white);
				color: var(--primary-color);
				text-decoration: underline;
			}

			.text {
				font-family: var(--fontFamilyLato);
			}

			.text--md {
				font-size: var(--text-md);
				line-height: var(--line-height-md);
			}

			.text--sm {
				font-size: var(--text-sm);
				line-height: var(--line-height-sm);
			}

			.text--xs {
				font-size: var(--text-xs);
				line-height: var(--line-height-xs);
			}
		}

		.climate_preview_details {
			display: flex;
			flex-direction: row;
			gap: 1rem;
			overflow-x: auto;
			padding: 0 0 1rem;

			.climate_item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background-color: var(--white);
				color: var(--black);
				gap: 0.5rem;
				padding: 0.5rem;

				border: 1px solid var(--white);
				border-radius: var(--rounded-xl);
				box-shadow: var(--shadow-md);

				.text {
					font-family: var(--fontFamilyLato);
				}
			}
		}
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
