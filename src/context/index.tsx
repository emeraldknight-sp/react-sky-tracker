import { CurrentWeatherProvider } from "./CurrentWeatherContext";
import { ForecastWeatherProvider } from "./ForecastWeatherContext";
import { LocationProvider } from "./LocationContext";
import { SessionProvider } from "./SessionContext";
import { UserProvider } from "./UserContext";

interface ContextProviderProps {
	children: React.ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
	return (
		<LocationProvider>
			<ForecastWeatherProvider>
				<CurrentWeatherProvider>
					<UserProvider>
						<SessionProvider>{children}</SessionProvider>
					</UserProvider>
				</CurrentWeatherProvider>
			</ForecastWeatherProvider>
		</LocationProvider>
	);
};
