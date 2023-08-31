export interface GeoLocation {
	city: {
		name: string;
		names: {
			[key: string]: string;
		};
	};
	continent: {
		code: string;
		geoname_id: number;
		names: {
			[key: string]: string;
		};
		name: string;
	};
	country: {
		geoname_id: number;
		iso_code: string;
		names: {
			[key: string]: string;
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
			[key: string]: string;
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
