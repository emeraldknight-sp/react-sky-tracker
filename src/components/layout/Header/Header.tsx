import { Logo } from "../../ui/Logo";
import { Container } from "../Container";
import { StyledHeader } from "./Header.style";

import { FiBell } from "react-icons/fi";

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<div className="content">
					<Logo />
					<button className="header__button__icon">
						<FiBell size={20} />
					</button>
				</div>
			</Container>
		</StyledHeader>
	);
};
