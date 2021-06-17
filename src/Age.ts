export const createAge = (ageValue: number): number | null => {
	if (ageValue < 0 || !Number.isInteger(ageValue)) {
		return null;
	}

	return ageValue;
}
