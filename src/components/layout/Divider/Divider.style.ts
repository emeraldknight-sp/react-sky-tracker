import styled from "styled-components";

export const StyledDividerGroup = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 0.5rem;
`;

export const StyledDivider = styled.div`
	border-bottom: 1px solid var(--charcoal);
	flex: 1;
`;

export const StyledContent = styled.span`
	font-size: var(--text-sm);
	font-family: var(--fontFamilyLato);
	line-height: var(--line-height-sm);
	font-weight: 400;
`;
