import { Button } from "../../components/ui/Button";
import { ChangeEvent, FormEvent, useContext } from "react";
import { Divider } from "../../components/layout/Divider";
import { GhostLottie } from "../../components/animations/GhostLottie";
import { Header } from "../../components/layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import { SessionContext } from "../../context/SessionContext";
import { loginSchema } from "../../components/utils/loginSchema";
import { toast } from "sonner";
import { verifyUserCredentials } from "../../middlewares/verifyUserCredentials.middleware";
import {
	StyledLoginForm,
	StyledInput,
	StyledLogin,
	StyledSocialLoginButtons,
	StyledLoginButtonForm,
} from "./Login.style";

export const Login = () => {
	const { session, setSession } = useContext(SessionContext);
	const navigate = useNavigate();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;

		setSession({
			...session,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const verifiedUser = verifyUserCredentials(session);
		const validatedLogin = loginSchema.safeParse(session);

		setSession({ ...session, isLogged: true });

		if (verifiedUser && validatedLogin.success) {
			navigate("/account");
			toast("Bem-vindo!", { id: "greetings", icon: "👋" });
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
						<GhostLottie />
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
						<Link to="/login">Esqueci minha senha</Link>
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
							<i className="fa-brands fa-google"></i>
						</Button>
						<Button type="button" size="lg" style="text">
							<i className="fa-brands fa-microsoft"></i>
						</Button>
						<Button type="button" size="lg" style="text">
							<i className="fa-brands fa-meta"></i>
						</Button>
						<Button type="button" size="lg" style="text">
							<i className="fa-brands fa-x-twitter"></i>
						</Button>
					</StyledSocialLoginButtons>
				</StyledLogin>
			</Main>
			<Navbar />
		</>
	);
};
