import loading from "../../../assets/loading.json";
import Lottie from "react-lottie";

export const Loading = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loading,
	};
	return <Lottie options={defaultOptions} width={100} height={100} />;
};
