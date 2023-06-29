import { Link } from "react-router-dom";
import { StyledLogo } from "./Logo.style";

import ImageLogo from "../../../assets/logo.png";

export const Logo = () => {
	return (
		<StyledLogo>
			<Link to="/" className="homepage__link">
				<figure className="homepage__link__figure">
					<img src={ImageLogo} className="homepage__link__image" alt="Logo" />
				</figure>
				<span className="homepage__link__text">Project Weather</span>
			</Link>
		</StyledLogo>
	);
};
