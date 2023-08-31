import { FiBell } from "react-icons/fi";
import { Logo } from "../../ui/Logo";
import { HeaderContent, StyledHeader } from "./Header.style";
import { Container } from "../Container";

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<HeaderContent>
					<Logo />
					<button className="header__button__icon">
						<FiBell size={20} />
					</button>
				</HeaderContent>
			</Container>
		</StyledHeader>
	);
};
