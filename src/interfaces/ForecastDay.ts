import { Astro } from "./forecastday/Astro";
import { Day } from "./forecastday/Day";
import { Hour } from "./forecastday/Hour";

export interface ForecastDay {
	date: string;
	date_epoch: number;
	day: Day;
	astro: Astro;
	hour: Hour[];
}
