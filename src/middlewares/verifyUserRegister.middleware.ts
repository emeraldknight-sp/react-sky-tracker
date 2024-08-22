import { toast } from "sonner";
import { database } from "../database/db";

export const verifyUserRegister = (userData: User) => {
	const storedUsers = localStorage.getItem("users");
	const users = storedUsers ? JSON.parse(storedUsers) : [];

	const emailAlreadyExists = users.filter(
		(user: User) => user.email === userData.email,
	);

	if (emailAlreadyExists.length) {
		toast.error("Já existe uma conta de e-mail vinculada a esta conta", {
			id: "email already exists",
		});
		return false;
	}

	database.push(userData);
	localStorage.setItem("users", JSON.stringify(database));

	return true;
};
