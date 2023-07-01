import { FiSunrise, FiSunset } from "react-icons/fi";

import { Header } from "../../components/layout/Header/";
import { Main } from "../../components/layout/Main";

import { ClimateInformation } from "../../components/ui/cards/ClimateInformation/ClimateInformation";
import { ClimateDetails } from "../../components/ui/cards/ClimateDetails";
import { ClimatePreview } from "../../components/ui/cards/ClimatePreview";

import { mockForecast } from "../../mock/mockForecast";
import { mockCurrent } from "../../mock/mockCurrent";

import "./Home.style.js";
import { SunMoonToggle } from "../../components/ui/cards/SunMoonToggle";

export const Home = () => {
	return (
		<>
			<Header />
			<Main>
				<div className="content">
					<ClimateInformation data={mockForecast} />
					<ClimateDetails data={mockCurrent} />
					<ClimatePreview data={mockForecast} />
					<SunMoonToggle data={mockForecast} />
					{/* <div className="main_sun_moon_toggle">
						<div className="time_container">
							<span>
								<FiSunrise size={24} />
							</span>
							<p className="text">Nascer do Sol</p>
							<p className="text">00h00</p>
						</div>
						<div className="time_container">
							<span>
								<FiSunset size={24} />
							</span>
							<p className="text">Pôr do Sol</p>
							<p className="text">05h00</p>
						</div>
					</div> */}
				</div>
			</Main>
		</>
	);
};
