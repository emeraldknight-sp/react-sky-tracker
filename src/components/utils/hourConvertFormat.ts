export const convertTo24HourFormat = (time: string): string => {
	const [hour, minute, period] = time.split(/:| /);
	let hour24 = parseInt(hour, 10);

	if (period === "PM" && hour24 < 12) {
		hour24 += 12;
	}

	if (period === "AM" && hour24 === 12) {
		hour24 = 0;
	}

	return `${hour24.toString().padStart(2, "0")}:${minute}`;
};
