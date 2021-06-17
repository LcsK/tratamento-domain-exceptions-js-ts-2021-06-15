export const createAge = (ageValue: number): number => {
	if (ageValue < 0 || !Number.isInteger(ageValue)) {
		throw new TypeError('InvalidAge');
	}

	return ageValue;
}
