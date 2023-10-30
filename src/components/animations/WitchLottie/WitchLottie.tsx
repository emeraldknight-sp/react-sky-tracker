import Lottie from "react-lottie";
import witch from "../../../assets/animation-witch.json";

export const WitchLottie = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: witch,
	};
	return <Lottie options={defaultOptions} width={50} height={50} />;
};
