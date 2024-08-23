import { Activity, Home, Map, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "./Navbar.style";

export const Navbar = () => {
	const options = [
		{
			link: "/",
			icon: <Home size={24} />,
		},
		{
			link: "/activities",
			icon: <Activity size={24} />,
		},
		{
			link: "/",
			icon: <Search size={24} />,
		},
		{
			link: "/",
			icon: <Map size={24} />,
		},
		{
			link: "/account",
			icon: <User size={24} />,
		},
	];

	return (
		<StyledNavbar>
			<ul className="navbar__list">
				{options.map((option, index) => (
					<li key={index} className="navbar__item">
						<Link to={`${option.link}`} className="navbar__link">
							{option.icon}
						</Link>
					</li>
				))}
			</ul>
		</StyledNavbar>
	);
};
