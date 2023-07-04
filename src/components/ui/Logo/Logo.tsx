import { Link } from "react-router-dom";
import { StyledLogo } from "./Logo.style";

import ImageLogo from "../../../assets/logo.png";

export const Logo = () => {
	return (
		<StyledLogo>
			<Link to="/" className="homepage_link">
				<figure className="homepage_link_figure">
					<img src={ImageLogo} className="homepage_link_image" alt="Logo" />
				</figure>
				<span className="homepage_link_text">Project Weather</span>
			</Link>
		</StyledLogo>
	);
};
