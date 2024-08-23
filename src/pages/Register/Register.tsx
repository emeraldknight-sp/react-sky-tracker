import { Button } from "../../components/ui/Button";
import { ChangeEvent, FormEvent, useContext } from "react";
import { Divider } from "../../components/layout/Divider";
import { Header } from "../../components/layout/Header";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import { UserContext } from "../../context/UserContext";
import { WitchLottie } from "../../components/animations/WitchLottie/WitchLottie";
import { registrationSchema } from "../../components/utils/registrationSchema";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { verifyUserRegister } from "../../middlewares/verifyUserRegister.middleware";
import {
	StyledButtonGroupForm,
	StyledInput,
	StyledRegister,
	StyledRegisterForm,
	StyledSocialRegisterButtons,
} from "./Register.style";

export const Register = () => {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const verifiedUser = verifyUserRegister(user);
		const validatedForm = registrationSchema.safeParse(user);

		if (verifiedUser && validatedForm.success) {
			toast.success("Conta criada com sucesso", {
				id: "success to create account",
			});
			navigate("/login");
		}
	};

	const handleClick = () => {
		navigate("/login");
	};

	return (
		<>
			<Header />
			<Main>
				<StyledRegister>
					<div className="page-title">
						<WitchLottie />
						<h2>Registrar conta</h2>
					</div>
					<StyledRegisterForm action="submit" onSubmit={(e) => handleSubmit(e)}>
						<StyledInput>
							<label htmlFor="given-name">Nome</label>
							<input
								id="given-name"
								name="firstName"
								type="text"
								autoComplete="given-name"
								placeholder="Digite seu nome"
								value={user.firstName}
								onChange={handleChange}
							/>
						</StyledInput>
						<StyledInput>
							<label htmlFor="family-name">Sobrenome</label>
							<input
								id="family-name"
								name="lastName"
								type="text"
								autoComplete="family-name"
								placeholder="Digite seu sobrenome"
								value={user.lastName}
								onChange={handleChange}
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
								value={user.email}
								onChange={handleChange}
							/>
						</StyledInput>
						<StyledInput>
							<label htmlFor="password">Senha</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="new-password"
								placeholder="Digite sua senha"
								value={user.password}
								onChange={handleChange}
							/>
						</StyledInput>
						<StyledInput>
							<label htmlFor="confirm-password">Confirmar senha</label>
							<input
								id="confirm-password"
								name="confirmPassword"
								type="password"
								autoComplete="new-password"
								placeholder="Confirme sua senha"
								value={user.confirmPassword}
								onChange={handleChange}
							/>
						</StyledInput>
						<StyledButtonGroupForm>
							<Button
								type="button"
								size="lg"
								style="text"
								onClick={handleClick}
							>
								Fazer login
							</Button>
							<Button type="submit" size="lg" style="contained">
								Criar conta
							</Button>
						</StyledButtonGroupForm>
					</StyledRegisterForm>
					<Divider>registre-se com</Divider>
					<StyledSocialRegisterButtons>
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
					</StyledSocialRegisterButtons>
				</StyledRegister>
			</Main>
			<Navbar />
		</>
	);
};
