import { AlertsData } from "./AlertsData";
import { CurrentData } from "./CurrentData";
import { ForecastData } from "./ForecastData";
import { LocationData } from "./LocationData";

export interface ForecastWeatherData {
	data: {
		location: LocationData;
		current: CurrentData;
		forecast: ForecastData;
		alerts: AlertsData;
	};
}
