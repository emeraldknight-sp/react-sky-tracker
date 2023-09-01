import { useContext } from "react";

import { Header } from "../../components/layout/Header/";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";

import { ClimateInformation } from "../../components/ui/cards/ClimateInformation/ClimateInformation";
import { ClimateDetails } from "../../components/ui/cards/ClimateDetails";
import { ClimatePreview } from "../../components/ui/cards/ClimatePreview";
import { SunMoonToggle } from "../../components/ui/cards/SunMoonToggle";

import { LocationContext } from "../../context/LocationContext";

import { FlexContainer, StyledHome } from "./Home.style";
import { Loading } from "../../components/layout/Loading";

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
					<Loading />
				)}
			</Main>
			<Navbar />
		</StyledHome>
	);
};
