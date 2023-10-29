import { BsFacebook, BsGoogle, BsMicrosoft, BsTwitter } from "react-icons/bs";
import { Button } from "../../components/ui/Button";
import { ChangeEvent, FormEvent, useContext } from "react";
import { Divider } from "../../components/layout/Divider";
import { GhostHalloween } from "../../components/layout/GhostHalloween";
import { Header } from "../../components/layout/Header";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import {
	StyledButtonGroupForm,
	StyledInput,
	StyledRegister,
	StyledRegisterForm,
	StyledSocialRegisterButtons,
} from "./Register.style";
import { UserDataContext } from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { verifyUserRegister } from "../../middlewares/verifyUserRegister.middleware";
import { registrationSchema } from "../../components/utils/registrationSchema";

export const Register = () => {
	const { userData, setUserData } = useContext(UserDataContext);
	const navigate = useNavigate();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setUserData({
			...userData,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const verifiedUser = verifyUserRegister(userData);
		const validatedForm = registrationSchema.safeParse(userData);

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
						<GhostHalloween />
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
								value={userData.firstName}
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
								value={userData.lastName}
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
								value={userData.email}
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
								value={userData.password}
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
								value={userData.confirmPassword}
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
