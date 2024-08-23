import Logo from "../../../assets/logo.svg";
import { Bell, BellRing } from "lucide-react";
import { Link } from "react-router-dom";
import { StyledButtonNotifications, StyledHeader } from "./Header.style";
import { toast } from "sonner";
import { useState } from "react";

export const Header = () => {
	const [isOpenNotifications, setIsOpenNotifications] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [hasNotifications, setHasNotifications] = useState(false);

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
			<StyledButtonNotifications
				type="button"
				onClick={handleNotifications}
				title="notifications"
				aria-label="notifications"
				hasNotifications={hasNotifications}
			>
				{hasNotifications ? <BellRing size={20} /> : <Bell size={20} />}
			</StyledButtonNotifications>
		</StyledHeader>
	);
};
