import { Container } from "../Container";
import { StyledMain } from "./Main.style";

export const Main = ({ children }: MainProps) => {
	return (
		<StyledMain>
			<Container>{children}</Container>
		</StyledMain>
	);
};
