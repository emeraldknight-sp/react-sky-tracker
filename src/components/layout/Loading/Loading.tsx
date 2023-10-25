import Lottie from "react-lottie";
import loading from "../../../assets/animation-loading.json";

export const Loading = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loading,
	};
	return <Lottie options={defaultOptions} width={100} height={100} />;
};
