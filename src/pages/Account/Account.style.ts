import styled from "styled-components";

export const StyledAccount = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;

	img {
		width: 50px;
		height: 50px;
		border-radius: 100%;
	}
`;

export const StyledProfile = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
`;

export const StyledUsername = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
`;
