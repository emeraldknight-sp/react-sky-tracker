import { FiBell } from "react-icons/fi";
import { Logo } from "../../ui/Logo";
import { HeaderContainer, StyledHeader } from "./Header.style";
import { Menu } from "../../ui/Menu";

export const Header = () => {
	return (
		<StyledHeader>
				<HeaderContainer>
					<Logo />
					<Menu />
					<button className="header__button__icon">
						<FiBell size={20} />
					</button>
				</HeaderContainer>
		</StyledHeader>
	);
};
