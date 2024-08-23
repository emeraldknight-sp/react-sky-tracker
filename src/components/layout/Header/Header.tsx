import Logo from "../../../assets/logo.svg";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.style";
import { toast } from "sonner";
import { useState } from "react";

export const Header = () => {
	const [isOpenNotifications, setIsOpenNotifications] = useState(false);

	const handleNotifications = () => {
		setIsOpenNotifications(!isOpenNotifications);
		toast.info("Not available");
	};

	return (
		<StyledHeader>
			<Link to="/" reloadDocument>
				<img
					src={Logo}
					alt="logotipo sky tracker"
					aria-label="logotipo sky tracker"
					loading="lazy"
					title="Logotipo Sky Tracker | Clique aqui para recarregar a página"
				/>
				<h1>Project Skytracker</h1>
			</Link>
			<button
				type="button"
				onClick={handleNotifications}
				title="notifications"
				aria-label="notifications"
			>
				<Bell size={20} />
			</button>
		</StyledHeader>
	);
};
