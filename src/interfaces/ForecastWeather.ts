import { Alerts } from "./Alerts";
import { Current } from "./Current";
import { Forecast } from "./Forecast";
import { Location } from "./Location";

export interface ForecastWeather {
	location: Location;
	current: Current;
	forecast: Forecast;
	alerts: Alerts;
}
