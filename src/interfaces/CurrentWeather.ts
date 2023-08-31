import { Current } from "./Current";
import { Location } from "./Location";

export interface CurrentWeather {
	location: Location;
	current: Current;
}
