import { Alerts } from "./Alerts";
import { Current } from "./Current";
import { Forecast } from "./Forecast";
import { Location } from "./Location";

export interface ForecastWeatherData {
	data: {
		location: Location;
		current: Current;
		forecast: Forecast;
		alerts: Alerts;
	};
}
