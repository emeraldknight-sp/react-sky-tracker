export interface User {
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
		units: "metric" | "imperial";
		notifications: {
			previsaoDiaria: boolean;
			alertasMeteorologicos: boolean;
		};
		theme: "light" | "dark";
	};
	favorites?: string[];
	searchHistory?: {
		location: string;
		timestamp: string;
	}[];
}
