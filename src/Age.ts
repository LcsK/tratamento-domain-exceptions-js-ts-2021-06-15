import { DomainError } from "./DomainError";

export interface InvalidAge extends DomainError {
	name: 'InvalidAge';
}

const createInvalidAge = (ageValue: number): InvalidAge => ({
	name: 'InvalidAge',
	message: `Idade deve ser um número positivo e inteiro. Recebeu: ${ageValue}`,
});

export const createAge = (ageValue: number): number | InvalidAge => {
	if (ageValue < 0 || !Number.isInteger(ageValue)) {
		return createInvalidAge(ageValue);
	}

	return ageValue;
}
