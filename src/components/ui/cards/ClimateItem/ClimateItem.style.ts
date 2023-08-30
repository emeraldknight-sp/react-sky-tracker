import { styled } from "styled-components";

export const StyledClimateItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;

	max-width: 100px;

	@media (min-width: 768px) {
		justify-content: center;
	}
`;
