import { CurrentWeatherProvider } from "./CurrentWeatherContext";
import { ForecastWeatherProvider } from "./ForecastWeatherContext";
import { LocationProvider } from "./LocationContext";
import { UserDataProvider } from "./UserDataContext";

interface ContextProviderProps {
	children: React.ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
	return (
		<LocationProvider>
			<ForecastWeatherProvider>
				<CurrentWeatherProvider>
					<UserDataProvider>{children}</UserDataProvider>
				</CurrentWeatherProvider>
			</ForecastWeatherProvider>
		</LocationProvider>
	);
};
