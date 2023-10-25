import toast from "react-hot-toast";

import { Button } from "../Button";
import { StyledMenu } from "./Menu.style";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
	const options = [
		{
			icon: "",
			name: "Início",
			url: "/",
		},
		{
			icon: "",
			name: "Atividades",
			url: "/activities",
		},
		{
			icon: "",
			name: "Mapas",
			url: "/maps",
		},
		{
			icon: "",
			name: "Minha conta",
			url: "/account",
		},
	];

	const navigate = useNavigate();

	const handleClick = (urlParam: string) => {
		if (urlParam === "/account") {
			navigate("/account");
		} else if (urlParam === "/") {
			navigate("/");
		} else {
			toast.error("Em desenvolvimento", { id: urlParam });
		}
	};

	return (
		<StyledMenu>
			{options.map(({ url, name }, index) => (
				<li key={index}>
					<Button style="text" size="sm" onClick={() => handleClick(url)}>
						<span>{name}</span>
					</Button>
				</li>
			))}
		</StyledMenu>
	);
};
