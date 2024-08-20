declare module "*.jpg";
declare module "*.svg";
declare module "*.png";

interface CurrentWeather {
	location: {
		name: string;
		region: string;
		country: string;
		lat: number;
		lon: number;
		tz_id: string;
		localtime_epoch: number;
		localtime: string;
	};
	current: {
		last_updated_epoch: number;
		last_updated: string;
		temp_c: number;
		temp_f: number;
		is_day: number;
		condition: {
			text: string;
			icon: string;
			code: number;
		};
		wind_mph: number;
		wind_kph: number;
		wind_degree: number;
		wind_dir: string;
		pressure_mb: number;
		pressure_in: number;
		precip_mm: number;
		precip_in: number;
		humidity: number;
		cloud: number;
		feelslike_c: number;
		feelslike_f: number;
		vis_km: number;
		vis_miles: number;
		uv: number;
		gust_mph: number;
		gust_kph: number;
		air_quality: {
			co: number;
			no2: number;
			o3: number;
			so2: number;
			pm2_5: number;
			pm10: number;
			"us-epa-index": number;
			"gb-defra-index": number;
		};
	};
}

interface CurrentWeatherProviderProps {
	children: React.ReactNode;
}

type AirQuality = Pick<Current, "air_quality">;

interface ForecastWeather {
	location: {
		name: string;
		region: string;
		country: string;
		lat: number;
		lon: number;
		tz_id: string;
		localtime_epoch: number;
		localtime: string;
	};
	current: {
		last_updated_epoch: number;
		last_updated: string;
		temp_c: number;
		temp_f: number;
		is_day: number;
		condition: {
			text: string;
			icon: string;
			code: number;
		};
		wind_mph: number;
		wind_kph: number;
		wind_degree: number;
		wind_dir: string;
		pressure_mb: number;
		pressure_in: number;
		precip_mm: number;
		precip_in: number;
		humidity: number;
		cloud: number;
		feelslike_c: number;
		feelslike_f: number;
		vis_km: number;
		vis_miles: number;
		uv: number;
		gust_mph: number;
		gust_kph: number;
		air_quality: {
			co: number;
			no2: number;
			o3: number;
			so2: number;
			pm2_5: number;
			pm10: number;
			"us-epa-index": number;
			"gb-defra-index": number;
		};
	};
	forecast: {
		forecastday: {
			date: string;
			date_epoch: number;
			day: Day;
			astro: Astro;
			hour: Hour[];
		}[];
	};
	alerts: { alert: never[] };
}

interface Astro {
	sunrise: string;
	sunset: string;
	moonrise: string;
	moonset: string;
	moon_phase: string;
	moon_illumination: string;
	is_moon_up: number;
	is_sun_up: number;
}

interface Day {
	maxtemp_c: number;
	maxtemp_f: number;
	mintemp_c: number;
	mintemp_f: number;
	avgtemp_c: number;
	avgtemp_f: number;
	maxwind_mph: number;
	maxwind_kph: number;
	totalprecip_mm: number;
	totalprecip_in: number;
	totalsnow_cm: number;
	avgvis_km: number;
	avgvis_miles: number;
	avghumidity: number;
	daily_will_it_rain: number;
	daily_chance_of_rain: number;
	daily_will_it_snow: number;
	daily_chance_of_snow: number;
	condition: {
		text: string;
		icon: string;
		code: number;
	};
	uv: number;
}

interface Hour {
	time_epoch: number;
	time: string;
	temp_c: number;
	temp_f: number;
	is_day: number;
	condition: {
		text: string;
		icon: string;
		code: number;
	};
	wind_mph: number;
	wind_kph: number;
	wind_degree: number;
	wind_dir: string;
	pressure_mb: number;
	pressure_in: number;
	precip_mm: number;
	precip_in: number;
	humidity: number;
	cloud: number;
	feelslike_c: number;
	feelslike_f: number;
	windchill_c: number;
	windchill_f: number;
	heatindex_c: number;
	heatindex_f: number;
	dewpoint_c: number;
	dewpoint_f: number;
	will_it_rain: number;
	chance_of_rain: number;
	will_it_snow: number;
	chance_of_snow: number;
	vis_km: number;
	vis_miles: number;
	gust_mph: number;
	gust_kph: number;
	uv: number;
}

interface ForecastWeatherProviderProps {
	children: React.ReactNode;
}

type ClimateInformationProps = Omit<ForecastWeather, "alerts">;

type ClimateDetailsProps = Pick<ForecastWeather, "current">;

type ClimatePreviewProps = Pick<ForecastWeather, "forecast">;

interface ConfigSession {
	email: string;
	password: string;
	remember: boolean;
	isLogged: boolean;
}

interface SessionProviderProps {
	children: React.ReactNode;
}

interface SessionContextProps {
	session: ConfigSession;
	setSession: (session: ConfigSession) => void;
}

interface UserContextProviderProps {
	children: React.ReactNode;
}

interface UserContext {
	user: User;
	setUser: (user: User) => void;
}

interface User {
	id?: string;
	username?: string;
	email: string;
	password: string;
	confirmPassword: string;
	firstName: string;
	lastName: string;
	location?: {
		latitude: number;
		longitude: number;
		city: string;
		country: string;
		timezone: string;
	};
	settings?: {
		units: metric | imperial;
		notifications: {
			previsaoDiaria: boolean;
			alertasMeteorologicos: boolean;
		};
		theme: light | dark;
	};
	favorites?: string[];
	searchHistory?: {
		location: string;
		timestamp: string;
	}[];
}

interface LocationProviderProps {
	children: React.ReactNode;
}
