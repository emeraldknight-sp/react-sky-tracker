import { ReactNode } from "react";
import { Container } from "../Container";
import { StyledMain } from "./Main.style";

interface MainProps {
	children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
	return (
		<StyledMain>
			<Container>{children}</Container>
		</StyledMain>
	);
};
