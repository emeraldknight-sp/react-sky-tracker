import { CurrentData } from "./CurrentData";
import { LocationData } from "./LocationData";

export interface CurrentWeatherData {
	data: {
		location: LocationData;
		current: CurrentData;
	};
}
