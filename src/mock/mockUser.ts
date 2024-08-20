export const mockUser: User = {
	id: "",
	username: "",
	email: "",
	password: "",
	confirmPassword: "",
	firstName: "",
	lastName: "",
	location: {
		latitude: 0,
		longitude: 0,
		city: "",
		country: "",
		timezone: "",
	},
	settings: {
		units: "metric",
		notifications: {
			previsaoDiaria: false,
			alertasMeteorologicos: false,
		},
		theme: "light",
	},
	favorites: [],
	searchHistory: [],
};
