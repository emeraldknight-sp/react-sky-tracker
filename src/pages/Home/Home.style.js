import { styled } from "styled-components";

export const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding-bottom: 100px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}

	@media screen and (min-width: 1024px) {
		flex-direction: row;

		.content--box-1 {
			order: 1;
			width: 50%;
		}

		.content--box-2 {
			order: 2;
		}

		.content--box-3 {
			order: 3;
			width: 100%;
		}

		.content--box-4 {
			order: 4;
		}
	}

	.content--box-1, 
	.content--box-2,
	.content--box-4 {
		flex: 1;
	}

	.content--box-3 {
		overflow: hidden;
	}
`;
