import { GeoLocation } from "../../interfaces/GeoLocation";

export const locationNameFormat = (
	location: GeoLocation,
	outputType: string,
) => {
	const cityName = location.city?.name;
	const stateName = location.state?.name;
	const countryName = location.country?.name_native;
	const coordinates = location.location;

	if (outputType === "string") {
		return `${cityName}, ${stateName}, ${countryName}`;
	} else if (outputType === "object") {
		return {
			city: cityName,
			state: stateName,
			nativeName: countryName,
			coordinates: coordinates,
		};
	} else {
		throw new Error("Invalid output type");
	}
};
