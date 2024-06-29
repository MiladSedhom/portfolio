export const mapRange = (
	value: number,
	oldMin: number,
	oldMax: number,
	newMin: number,
	newMax: number
) => {
	return newMin + ((newMax - newMin) * (value - oldMin)) / (oldMax - oldMin);
};
