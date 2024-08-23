import { Header } from "../Header";
import { Main } from "../Main";
import { Navbar } from "../Navbar";

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Navbar />
		</>
	);
};
