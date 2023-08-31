import { Link } from "react-router-dom";
import { FiActivity, FiHome, FiMap, FiSearch, FiUser } from "react-icons/fi";
import { StyledNavbar } from "./Navbar.style";

export const Navbar = () => {
	const options = [
		{
			link: "/",
			icon: <FiHome size={24} />,
		},
		{
			link: "/",
			icon: <FiActivity size={24} />,
		},
		{
			link: "/",
			icon: <FiSearch size={24} />,
		},
		{
			link: "/",
			icon: <FiMap size={24} />,
		},
		{
			link: "/",
			icon: <FiUser size={24} />,
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
