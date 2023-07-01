import { styled } from "styled-components";

export const StyledClimateInformation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem;
	height: 9rem;
	background-color: var(--snow);
	border-radius: var(--rounded-md);
	box-shadow: var(--shadow-md);
	color: var(--white);
	font-family: var(--fontFamilyLato);

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.content--without-gap {
		gap: 0;
	}

	.location {
		font-size: var(--text-sm);
		line-height: var(--line-height-sm);
		text-align: center;
	}

	.temperature {
		font-size: var(--text-5xl);
		line-height: var(--line-height-5xl);
		text-align: center;
	}

	.preview {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;

		.preview_temp {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 0.25rem;
			font-size: var(--text-xs);
			line-height: var(--line-height---text-xs);
		}
	}

	.feelslike {
		font-size: var(--text-xs);
		line-height: var(--line-height-xs);
	}
`;
