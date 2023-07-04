import { AirQuality } from "../../interfaces/utils/AirQuality";

export const airQualityAverage = (airQualityData: AirQuality) => {
	try {
		const pollutantIndices = Object.values(airQualityData).filter(
			(value) => typeof value === "number",
		);

		const averageIndex =
			pollutantIndices.reduce((sum, value) => sum + value, 0) /
			pollutantIndices.length;

		const result = Math.round(averageIndex);

		return result;
	} catch (err) {
		console.error("Erro: ", err);
	}
};
