import { styled } from "styled-components";

export const StyledLogo = styled.div`
	.homepage_link {
		display: flex;
		text-decoration: none;
		align-items: center;
		gap: 8px;
	}

	.homepage_link_figure {
	}

	.homepage_link_image {
		width: 40px;
	}

	.homepage_link_text {
		font-family: var(--fontFamilyLato);
		font-size: var(--text-2xl);
		line-height: var(--line-height-2xl);
		color: var(--black);
	}
`;
