import toast from "react-hot-toast";
import { ConfigSession } from "../pages/Login";
import { User } from "../interfaces/User";

export const verifyUserCredentials = (session: ConfigSession) => {
	const storedUsers = localStorage.getItem("users");
	const users = storedUsers ? JSON.parse(storedUsers) : [];

	const filteredUser = users.filter(
		(user: User) => user.email === session.email,
	);

	if (!filteredUser.length) {
		toast.error("Nenhuma conta está vinculada neste e-mail", {
			id: "user not found",
		});
		return false;
	}

	const checkPassword = filteredUser.filter(
		(user: User) => user.password === session.password,
	);

	if (!checkPassword.length) {
		toast.error("Senha incorreta", { id: "password wrong" });
		return false;
	}

	sessionStorage.setItem("userSession", JSON.stringify(session));

	return true;
};
