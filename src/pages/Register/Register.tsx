import { BsFacebook, BsGoogle, BsMicrosoft, BsTwitter } from "react-icons/bs";
import { Divider } from "../../components/layout/Divider";
import { GhostHalloween } from "../../components/layout/GhostHalloween";
import { Header } from "../../components/layout/Header";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import { Button } from "../../components/ui/Button";
import {
	StyledInput,
	StyledRegister,
	StyledRegisterForm,
	StyledSocialRegisterButtons,
} from "./Register.style";

export const Register = () => {
	return (
		<>
			<Header />
			<Main>
				<StyledRegister>
					<div className="page-title">
						<GhostHalloween />
						<h2>Registrar conta</h2>
					</div>
					<StyledRegisterForm action="submit">
						<StyledInput>
							<label htmlFor="given-name">Nome</label>
							<input
								id="given-name"
								name="first-name"
								type="text"
								autoComplete="given-name"
								placeholder="Digite seu nome"
							/>
						</StyledInput>
						<StyledInput>
							<label htmlFor="family-name">Sobrenome</label>
							<input
								id="family-name"
								name="last-name"
								type="text"
								autoComplete="family-name"
								placeholder="Digite seu sobrenome"
							/>
						</StyledInput>
						<StyledInput>
							<label htmlFor="email">Email</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								placeholder="Digite seu e-mail"
							/>
						</StyledInput>
						<StyledInput>
							<label htmlFor="password">Senha</label>
							<input
								id="password"
								name="password"
								type="text"
								autoComplete="new-password"
								placeholder="Digite sua senha"
							/>
						</StyledInput>
						<StyledInput>
							<label htmlFor="confirm-password">Confirmar senha</label>
							<input
								id="confirm-password"
								name="confirm-password"
								type="text"
								autoComplete="new-password"
								placeholder="Confirme sua senha"
							/>
						</StyledInput>
						<Button type="submit" size="lg" style="contained">
							Criar conta
						</Button>
					</StyledRegisterForm>
					<Divider>registre-se com</Divider>
					<StyledSocialRegisterButtons>
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
					</StyledSocialRegisterButtons>
				</StyledRegister>
			</Main>
			<Navbar />
		</>
	);
};
