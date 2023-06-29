import { AstronomyAttribute } from "./AstronomyAttribute";
import { CurrentDayAttribute } from "./CurrentDayAttribute";
import { HourAttribute } from "./HourAttribute";

export interface ForecastDayAttribute {
	date: string;
	date_epoch: number;
	day: CurrentDayAttribute;
	astro: AstronomyAttribute;
	hour: HourAttribute[];
}
