import { ClimateDetails } from "../../components/ui/cards/ClimateDetails";
import { ClimateInformation } from "../../components/ui/cards/ClimateInformation/ClimateInformation";
import { ClimatePreview } from "../../components/ui/cards/ClimatePreview";
import { FlexContainer, StyledHome } from "./Home.style";
import { Header } from "../../components/layout/Header/";
import { LoadingLottie } from "../../components/animations/LoadingLottie";
import { LocationContext } from "../../context/LocationContext";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import { SunMoonToggle } from "../../components/ui/cards/SunMoonToggle";
import { useContext } from "react";

export const Home = () => {
	const location = useContext(LocationContext);

	return (
		<StyledHome>
			<Header />
			<Main>
				{location ? (
					<FlexContainer>
						<div className="flex-item">
							<ClimateInformation />
						</div>
						<div className="flex-item">
							<ClimateDetails />
						</div>
						<div className="flex-item">
							<ClimatePreview />
						</div>
						<div className="flex-item">
							<SunMoonToggle />
						</div>
					</FlexContainer>
				) : (
					<LoadingLottie />
				)}
			</Main>
			<Navbar />
		</StyledHome>
	);
};
