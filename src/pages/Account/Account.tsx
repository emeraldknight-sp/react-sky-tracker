import { useNavigate } from "react-router-dom";
import UserProfilePicture from "../../assets/user.png";
import { Header } from "../../components/layout/Header";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import { Button } from "../../components/ui/Button";
import { Register } from "../Register";
import { StyledAccount, StyledProfile, StyledUsername } from "./Account.style";
import toast from "react-hot-toast";

export const Account = () => {
	const storedUser = localStorage.getItem("user");

	if (storedUser) {
		const user = JSON.parse(storedUser);
		const navigate = useNavigate();

		const handleLogout = () => {
			localStorage.removeItem("user");
			toast("Você deslogou da sua conta", { icon: "👋" });
			navigate("/");
		};

		return (
			<>
				<Header />
				<Main>
					<StyledAccount>
						<StyledProfile>
							<figure>
								<img src={UserProfilePicture} alt="user profile" />
							</figure>
							<StyledUsername>
								<p className="name">
									{user.firstName} {user.lastName}
								</p>
								<span className="username">
									@{user.firstName.toLocaleLowerCase()}
									{user.lastName.toLocaleLowerCase()}
								</span>
							</StyledUsername>
						</StyledProfile>
						<h3>Configurações</h3>
						<p>Localização</p>
						<p>Unidades de medidas</p>
						<p>Tema escuro</p>
						<p>Idioma</p>
						<p>Alertas</p>
						<Button
							type="button"
							size="lg"
							style="contained"
							onClick={handleLogout}
						>
							Encerrar sessão
						</Button>
					</StyledAccount>
				</Main>
				<Navbar />
			</>
		);
	} else {
		return <Register />;
	}
};
