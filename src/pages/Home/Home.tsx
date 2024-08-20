import { ClimateDetails } from "../../components/ui/cards/ClimateDetails";
import { ClimateInformation } from "../../components/ui/cards/ClimateInformation/ClimateInformation";
import { ClimatePreview } from "../../components/ui/cards/ClimatePreview";
import { ForecastWeatherContext } from "../../context/ForecastWeatherContext";
import { Header } from "../../components/layout/Header/";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import { StyledHome } from "./Home.style";
import { SunMoonToggle } from "../../components/ui/cards/SunMoonToggle";
import { useContext } from "react";

export const Home = () => {
	const { location, current, forecast } = useContext(ForecastWeatherContext);

	return (
		<StyledHome>
			<Header />
			<Main>
				<ClimateInformation
					location={location}
					current={current}
					forecast={forecast}
				/>
				<ClimateDetails current={current} />
				<ClimatePreview forecast={forecast} />
				<SunMoonToggle forecast={forecast} />
			</Main>
			<Navbar />
		</StyledHome>
	);
};
