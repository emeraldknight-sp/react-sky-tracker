import { createContext, useEffect, useState } from "react";
import { getLocation } from "../api/getLocation";
import { mockLocation } from "../mock/mockLocation";
import { GeoLocation } from "../interfaces/GeoLocation";

export const LocationContext = createContext<GeoLocation>({
	city: {
		name: "Piracuruca",
		names: {
			en: "Piracuruca",
		},
	},
	continent: {
		code: "SA",
		geoname_id: 6255150,
		names: {
			de: "Südamerika",
			en: "South America",
			es: "Sudamérica",
			fa: "امریکای جنوبی",
			fr: "Amérique Du Sud",
			ja: "南アメリカ大陸",
			ko: "남아메리카",
			"pt-BR": "América Do Sul",
			ru: "Южная Америка",
			"zh-CN": "南美洲",
		},
		name: "South America",
	},
	country: {
		geoname_id: 3469034,
		iso_code: "BR",
		names: {
			de: "Brasilien",
			en: "Brazil",
			es: "Brasil",
			fa: "برزیل",
			fr: "Brésil",
			ja: "ブラジル",
			ko: "브라질",
			"pt-BR": "Brasil",
			ru: "Бразилия",
			"zh-CN": "巴西",
		},
		name: "Brazil",
		name_native: "Brasil",
		phone_code: "55",
		capital: "Brasília",
		currency: "BRL",
		flag: "🇧🇷",
		languages: [
			{
				iso_code: "pt",
				name: "Portuguese",
				name_native: "Português",
			},
		],
	},
	location: {
		latitude: -3.8666,
		longitude: -41.7415,
	},
	subdivisions: [
		{
			names: {
				en: "Ceará",
			},
		},
	],
	state: {
		name: "Ceará",
	},
	datasource: [
		{
			name: "IP to City Lite",
			attribution: "<a href='https://db-ip.com'>IP Geolocation by DB-IP</a>",
			license: "Creative Commons Attribution License",
		},
	],
	ip: "191.7.200.203",
});

interface LocationProviderProps {
	children: React.ReactNode;
}

export const LocationProvider = ({ children }: LocationProviderProps) => {
	const [location, setLocation] = useState(mockLocation);

	const fetchLocationData = async () => {
		try {
			const data = await getLocation();
			setLocation(data);
		} catch (error) {
			console.error("Erro ao obter dados de localização:", error);
			setLocation(location);
		}
	};

	useEffect(() => {
		fetchLocationData();
		const intervalId = setInterval(fetchLocationData, 10000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<LocationContext.Provider value={location}>
			{children}
		</LocationContext.Provider>
	);
};
