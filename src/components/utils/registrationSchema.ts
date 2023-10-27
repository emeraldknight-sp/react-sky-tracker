import { z } from "zod";

export const registrationSchema = z
	.object({
		firstName: z.string().min(1, { message: "Nome é obrigatório" }),
		lastName: z.string().min(1, { message: "Sobrenome é obrigatório" }),
		email: z.string().email({ message: "E-mail inválido" }),
		password: z
			.string()
			.min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
		confirmPassword: z
			.string()
			.min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});
