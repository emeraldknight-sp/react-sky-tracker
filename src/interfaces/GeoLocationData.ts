export interface GeoLocationData {
	city: {
		name: string;
		names: {
			en: string;
		};
	};
	continent: {
		code: string;
		geoname_id: number;
		names: {
			de: string;
			en: string;
			es: string;
			fa: string;
			fr: string;
			ja: string;
			ko: string;
			"pt-BR": string;
			ru: string;
			"zh-CN": string;
		};
		name: string;
	};
	country: {
		geoname_id: number;
		iso_code: string;
		names: {
			de: string;
			en: string;
			es: string;
			fa: string;
			fr: string;
			ja: string;
			ko: string;
			"pt-BR": string;
			ru: string;
			"zh-CN": string;
		};
		name: string;
		name_native: string;
		phone_code: string;
		capital: string;
		currency: string;
		flag: string;
		languages: {
			iso_code: string;
			name: string;
			name_native: string;
		}[];
	};
	location: {
		latitude: number;
		longitude: number;
	};
	subdivisions: {
		names: {
			en: string;
		};
	}[];
	state: {
		name: string;
	};
	datasource: {
		name: string;
		attribution: string;
		license: string;
	}[];
	ip: string;
}
