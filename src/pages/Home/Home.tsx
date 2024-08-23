import { ClimateDetails } from "../../components/ui/cards/ClimateDetails";
import { ClimateInformation } from "../../components/ui/cards/ClimateInformation/ClimateInformation";
import { ClimatePreview } from "../../components/ui/cards/ClimatePreview";
import { ForecastWeatherContext } from "../../context/ForecastWeatherContext";
import { StyledFlexContainer } from "./Home.style";
import { SunMoonToggle } from "../../components/ui/cards/SunMoonToggle";
import { useContext } from "react";
import { Layout } from "../../components/layout/Layout";

export const Home = () => {
	const { location, current, forecast } = useContext(ForecastWeatherContext);

	return (
		<Layout>
			<StyledFlexContainer>
				<ClimateInformation
					location={location}
					current={current}
					forecast={forecast}
				/>
				<ClimateDetails current={current} />
				<ClimatePreview forecast={forecast} />
				<SunMoonToggle forecast={forecast} />
			</StyledFlexContainer>
		</Layout>
	);
};
