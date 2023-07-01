import { Current } from "./Current";
import { Location } from "./Location";

export interface CurrentWeatherData {
	data: {
		location: Location;
		current: Current;
	};
}
