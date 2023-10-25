import Lottie from "react-lottie";
import ghost from "../../../assets/animation-halloween.json";

export const GhostHalloween = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: ghost,
	};
	return <Lottie options={defaultOptions} width={50} height={50} />;
};
