import { styled } from "styled-components";

export const StyledClimateInformation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem;
	background-color: var(--snow);
	border-radius: var(--rounded-md);
	box-shadow: var(--shadow-md);
	color: var(--white);
	font-family: var(--fontFamilyLato);
	text-align: center;

	.climate-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.climate-info__location {
		font-size: var(--text-sm);
		line-height: var(--line-height-sm);
	}

	.climate-info__temperature {
		font-size: var(--text-5xl);
		line-height: var(--line-height-5xl);
	}

	.climate-info__details {
		display: flex;
		flex-direction: column;
	}

	.climate-info__preview {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;

		.climate-info__preview-temp {
			display: flex;
			flex-direction: row;
			gap: 0.25rem;
			font-size: var(--text-xs);
			line-height: var(--line-height-xs);

			.climate-info__preview-temp--icon {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.climate-info__feelslike {
		font-size: var(--text-xs);
		line-height: var(--line-height-xs);
	}

	@media screen and (min-width: 768px) {
		/* width: 18rem; */
		height: 8rem;
	}
`;
