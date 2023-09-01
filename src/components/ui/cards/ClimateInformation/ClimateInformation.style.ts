import { styled } from "styled-components";

export const StyledClimateInformation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem;
	border-radius: var(--rounded-md);
	box-shadow: var(--shadow-md);
	color: var(--white);
	font-family: var(--fontFamilyLato);
	text-align: center;

	&.climate-info--snow {
		background: var(--snow);
		background: linear-gradient(45deg, var(--snow) 0%, var(--green-200) 100%);
	}

	&.climate-info--cloudy {
		background: var(--cloudy);
		background: linear-gradient(45deg, var(--cloudy) 0%, var(--snow) 100%);
	}

	&.climate-info--sunny {
		background: var(--sunny);
		background: linear-gradient(45deg, var(--sunny) 0%, var(--yellow-900) 100%);
	}

	&.climate-info--hot {
		background: var(--hot);
		background: linear-gradient(45deg, var(--hot) 0%, var(--yellow-900) 100%);
	}

	&.climate-info--rain {
		background: var(--rain);
		background: linear-gradient(45deg, var(--snow) 0%, var(--purple-700) 100%);
	}

	&.climate-info--default {
		background: var(--snow);
	}

	.climate-info__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.climate-info__location {
		font-size: var(--text-sm);
		line-height: var(--line-height-sm);
		font-weight: 400;
	}

	.climate-info__temperature {
		font-size: var(--text-5xl);
		line-height: var(--line-height-5xl);
		font-weight: 600;
	}

	.climate-info__details {
		display: flex;
		flex-direction: column;
	}

	.climate-info__preview {
		display: flex;
		flex-direction: row;
		gap: 1.25rem;

		.climate-info__preview-temp {
			display: flex;
			flex-direction: row;
			gap: 0.25rem;
			font-size: var(--text-xs);
			line-height: var(--line-height-xs);
			font-weight: 400;

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
		height: 10.5rem;
	}
`;
