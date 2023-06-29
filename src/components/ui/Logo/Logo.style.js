import { styled } from "styled-components";

export const StyledLogo = styled.div`
	.homepage__link {
		display: flex;
		text-decoration: none;
		align-items: center;
		gap: 8px;
	}

	.homepage__link__figure {
	}

	.homepage__link__image {
		width: 40px;
	}

	.homepage__link__text {
		font-family: var(--fontFamilyLato);
		font-size: var(--heading-1);
		color: var(--black);
	}
`;
