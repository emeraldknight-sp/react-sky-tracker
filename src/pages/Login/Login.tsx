import { Button } from "../../components/ui/Button";
import { Divider } from "../../components/layout/Divider";
import { GhostHalloween } from "../../components/layout/GhostHalloween";
import { Header } from "../../components/layout/Header";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import { BsFacebook, BsGoogle, BsMicrosoft, BsTwitter } from "react-icons/bs";
import {
	StyledLoginForm,
	StyledInput,
	StyledLogin,
	StyledSocialLoginButtons,
} from "./Login.style";

export const Login = () => {
	return (
		<>
			<Header />
			<Main>
				<StyledLogin>
					<div className="page-title">
						<GhostHalloween />
						<h2>Acessar conta</h2>
					</div>
					<StyledLoginForm action="">
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
							/>
						</StyledInput>
						<StyledInput className="flex-row">
							<input type="checkbox" name="remember" id="remember" />
							<label htmlFor="remember">Lembrar de mim por 30 dias</label>
						</StyledInput>
						<a href="http://">Esqueci minha senha</a>
						<Button type="submit" size="lg" style="contained">
							Entrar
						</Button>
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
