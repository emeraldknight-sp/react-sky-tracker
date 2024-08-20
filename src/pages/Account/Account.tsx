import UserProfilePicture from "../../assets/user.png";
import toast from "react-hot-toast";
import { Button } from "../../components/ui/Button";
import { Header } from "../../components/layout/Header";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import { StyledAccount, StyledProfile, StyledUsername } from "./Account.style";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../../context/SessionContext";

export const Account = () => {
	const storedUsers = localStorage.getItem("users");
	const { session, setSession } = useContext(SessionContext);
	const navigate = useNavigate();

	if (!storedUsers) {
		navigate("/register");
		return <Navigate to="/register" replace />;
	}

	const users = JSON.parse(storedUsers);
	const filteredUser = users.find((user: User) => user.email === session.email);

	const handleLogout = () => {
		setSession({ ...session, isLogged: false });
		toast("Você deslogou da sua conta", { id: "greetings", icon: "👋" });
		navigate("/");
	};

	if (!session.isLogged) {
		navigate("/login");
		return <Navigate to="/login" replace />;
	}

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
								{filteredUser.firstName} {filteredUser.lastName}
							</p>
							<span className="username">
								@{filteredUser.firstName.toLocaleLowerCase()}
								{filteredUser.lastName.toLocaleLowerCase()}
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
};
