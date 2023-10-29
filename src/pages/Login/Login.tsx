import { BsFacebook, BsGoogle, BsMicrosoft, BsTwitter } from "react-icons/bs";
import { Button } from "../../components/ui/Button";
import { Divider } from "../../components/layout/Divider";
import { GhostHalloween } from "../../components/layout/GhostHalloween";
import { Header } from "../../components/layout/Header";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import {
	StyledLoginForm,
	StyledInput,
	StyledLogin,
	StyledSocialLoginButtons,
	StyledLoginButtonForm,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ChangeEvent, FormEvent, useState } from "react";
import { verifyUserCredentials } from "../../middlewares/verifyUserCredentials.middleware";
import { loginSchema } from "../../components/utils/loginSchema";

export interface ConfigSession {
	email: string;
	password: string;
	remember: boolean;
	isLogged: boolean;
}

export const Login = () => {
	const [session, setSession] = useState<ConfigSession>({
		email: "",
		password: "",
		remember: false,
		isLogged: false,
	});

	const navigate = useNavigate();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;

		setSession({
			...session,
			[name]: type === "checkbox" ? checked : value,
			isLogged: !session.isLogged,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const verifiedUser = verifyUserCredentials(session);
		const validatedLogin = loginSchema.safeParse(session);

		if (verifiedUser && validatedLogin.success) {
			navigate("/account")
			toast("Bem-vindo!", { id: "welcome", icon: "👋" });
		}
	};

	const handleClick = () => {
		navigate("/register");
	};

	return (
		<>
			<Header />
			<Main>
				<StyledLogin>
					<div className="page-title">
						<GhostHalloween />
						<h2>Acessar conta</h2>
					</div>
					<StyledLoginForm action="" onSubmit={handleSubmit}>
						<StyledInput>
							<label htmlFor="email">Email</label>
							<input
								id="email"
								name="email"
								type="text"
								placeholder="Digite o seu email"
								aria-label="Digite o seu email"
								autoComplete="email"
								aria-autocomplete="none"
								aria-required
								required
								value={session.email}
								onChange={handleChange}
							/>
						</StyledInput>
						<StyledInput>
							<label htmlFor="password">Senha</label>
							<input
								id="password"
								name="password"
								type="password"
								placeholder="Digite a sua senha"
								aria-label="Digite a sua senha"
								autoComplete="current-password"
								aria-autocomplete="none"
								aria-required
								required
								value={session.password}
								onChange={handleChange}
							/>
						</StyledInput>
						<StyledInput className="flex-row">
							<input
								type="checkbox"
								name="remember"
								id="remember"
								checked={session.remember}
								onChange={handleChange}
							/>
							<label htmlFor="remember">Lembrar de mim por 30 dias</label>
						</StyledInput>
						<a href="http://">Esqueci minha senha</a>
						<StyledLoginButtonForm>
							<Button type="submit" size="lg" style="contained">
								Entrar
							</Button>
							<Button
								type="button"
								size="lg"
								style="text"
								onClick={handleClick}
							>
								Criar conta
							</Button>
						</StyledLoginButtonForm>
					</StyledLoginForm>
					<Divider>ou</Divider>
					<StyledSocialLoginButtons>
						<Button type="button" size="lg" style="text">
							<BsFacebook />
						</Button>
						<Button type="button" size="lg" style="text">
							<BsTwitter />
						</Button>
						<Button type="button" size="lg" style="text">
							<BsGoogle />
						</Button>
						<Button type="button" size="lg" style="text">
							<BsMicrosoft />
						</Button>
					</StyledSocialLoginButtons>
					{/* <GhostHalloween /> */}
				</StyledLogin>
			</Main>
			<Navbar />
		</>
	);
};
