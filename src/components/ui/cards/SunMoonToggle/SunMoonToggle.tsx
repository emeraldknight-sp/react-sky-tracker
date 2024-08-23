import { LoadingLottie } from "../../../animations/LoadingLottie";
import { StyledSunMoonToggle } from "./SunMoonToggle.style";
import { convertTo24HourFormat } from "../../../utils/hourConvertFormat";
import { formatDateToYYYYMMDD } from "../../../utils/formatDateToYYYYMMDD";
import { ChevronRight, Moon, Sunrise, Sunset } from "lucide-react";

export const SunMoonToggle = ({ forecast }: SunMoonToggleProps) => {
	const currentDate = formatDateToYYYYMMDD(new Date());
	const forecastDayFiltered = forecast.forecastday.filter(
		(element) => element.date === currentDate,
	)[0];

	if (!forecastDayFiltered) {
		return <LoadingLottie />;
	}

	const { astro } = forecastDayFiltered;

	const convertedSunrise = convertTo24HourFormat(astro.sunrise);
	const convertedSunset = convertTo24HourFormat(astro.sunset);
	const convertedMoonrise = convertTo24HourFormat(astro.moonrise);
	const convertedMoonset = convertTo24HourFormat(astro.moonset);
	const currentHour = new Date().getHours().toString();

	return (
		<StyledSunMoonToggle>
			{convertedSunrise <= currentHour && currentHour <= convertedSunset ? (
				<>
					<div className="astro__content--glassmorphism">
						<h3 className="astro__title">Nascer e pôr do Sol</h3>
					</div>
					<div className="astro__content">
						<div className="astro__info">
							<span className="astro__icon">
								<Sunrise size={24} />
							</span>
							<p className="astro__text">{convertedSunrise}</p>
						</div>
						<div className="astro__info">
							<span className="astro__icon">
								<Sunset size={24} />
							</span>
							<p className="astro__text">{convertedSunset}</p>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="astro__content--glassmorphism">
						<h3 className="astro__title">Nascer e pôr da Lua</h3>
					</div>
					<div className="astro__content">
						<div className="astro__info">
							<span className="astro__icon">
								<Moon size={24} />
							</span>
							<p className="astro__text">{convertedMoonrise}</p>
						</div>
						<div className="astro__moon-phase">
							<div className="astro__info--row">
								<span className="astro__icon">
									<Moon size={24} />
								</span>
								<p className="astro__text">{astro.moon_phase}</p>
							</div>
							<div className="astro__info--row">
								<p className="astro__text">Luz refletida</p>
								<span className="astro__icon">
									<ChevronRight />
								</span>
								<p className="astro__text">{astro.moon_illumination}</p>
							</div>
						</div>
						<div className="astro__info">
							<span>
								<Moon size={24} />
							</span>
							<p className="astro__text">{convertedMoonset}</p>
						</div>
					</div>
				</>
			)}
		</StyledSunMoonToggle>
	);
};

export default SunMoonToggle;
