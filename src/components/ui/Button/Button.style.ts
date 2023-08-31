import styled from "styled-components";

export const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	background-color: var(--button-bg-color, #007bff);
	color: var(--button-text-color, #fff);
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: var(--button-hover-bg-color, #0056b3);
	}
`;
