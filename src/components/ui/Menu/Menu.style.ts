import styled from "styled-components";

export const StyledMenu = styled.nav`
	display: none;

	@media (min-width: 1024px) {
		display: flex;
		flex-direction: row;
    justify-content: flex-end;
		margin-right: 1rem;
		align-items: center;
		gap: 1rem;
		flex: 1;
	}
`;