import { Either, createFailureResult, createSuccessResult } from "./DomainResult";
import { DomainError } from "./DomainError";

export interface NegativeAge extends DomainError {
	name: 'NegativeAge';
}

export interface NonIntegerAge extends DomainError {
	name: 'NonIntegerAge';
}

const createNegativeAge = (ageValue: number): NegativeAge => ({
	name: 'NegativeAge',
	message: `Idade deve ser um número positivo. Recebeu: ${ageValue}`,
});

const createNonIntegerAge = (ageValue: number): NonIntegerAge => ({
	name: 'NonIntegerAge',
	message: `Idade deve ser um número inteiro. Recebeu: ${ageValue}`,
});

export const createAge = (ageValue: number): Either<number, NegativeAge | NonIntegerAge> => {
	if (ageValue < 0) {
		return createFailureResult<number, NegativeAge>(
			createNegativeAge(ageValue)
		);
	} else if (!Number.isInteger(ageValue)) {
		return createFailureResult<number, NonIntegerAge>(
			createNonIntegerAge(ageValue)
		);
	}

	return createSuccessResult<number, NegativeAge | NonIntegerAge>(ageValue);
}
