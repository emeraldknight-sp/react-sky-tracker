import styled from "styled-components";

export const StyledActivities = styled.div`
	.article {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.section__list {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.section__item {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.section__item-name {
		font-size: var(--text-lg);
		font-family: var(--tipography-lato);
		line-height: var(--line-height-lg);
		font-weight: 600;
	}

	.section__item-button-group {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}

	.section__title {
		font-size: var(--text-xl);
		font-family: var(--tipography-lato);
		line-height: var(--line-height-xl);
		font-weight: 400;
	}
`;
