import { DomainError } from "./DomainError";

const createInvalidAge = (ageValue: number): DomainError => ({
	name: 'InvalidAge',
	message: `Idade deve ser um número positivo e inteiro. Recebeu: ${ageValue}`,
});

export const createAge = (ageValue: number): number | DomainError => {
	if (ageValue < 0 || !Number.isInteger(ageValue)) {
		return createInvalidAge(ageValue);
	}

	return ageValue;
}
