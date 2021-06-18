import { Either, createFailureResult, createSuccessResult } from "./DomainResult";
import { DomainError } from "./DomainError";

export type InvalidAgeStates = NegativeAge | NonIntegerAge;

export interface NegativeAge extends DomainError {
	name: 'NegativeAge';
}

export interface NonIntegerAge extends DomainError {
	name: 'NonIntegerAge';
}

export interface InvalidAge extends DomainError {
	name: 'InvalidAge';
	invalidStates: InvalidAgeStates[];
}

const createNegativeAge = (ageValue: number): NegativeAge => ({
	name: 'NegativeAge',
	message: `Idade deve ser um número positivo. Recebeu: ${ageValue}`,
});

const createNonIntegerAge = (ageValue: number): NonIntegerAge => ({
	name: 'NonIntegerAge',
	message: `Idade deve ser um número inteiro. Recebeu: ${ageValue}`,
});

const createInvalidAge = (invalidAgeStates: InvalidAgeStates[]): InvalidAge => ({
	name: 'InvalidAge',
	invalidStates: invalidAgeStates,
	message: 'Idade inválida',
});

export const createAge = (ageValue: number): Either<number, InvalidAge> => {
	const invalidAgeStates: InvalidAgeStates[] = [];
	if (ageValue < 0) {
		invalidAgeStates.push(
			createNegativeAge(ageValue)
		);
	}
	// ATENÇÃO: Na aula eu esqueci de refatorar de "else if" para somente "if"
	if (!Number.isInteger(ageValue)) {
		invalidAgeStates.push(
			createNonIntegerAge(ageValue)
		);
	}

	if (invalidAgeStates.length) {
		return createFailureResult<number, InvalidAge>(
			createInvalidAge(invalidAgeStates),
		);
	}

	return createSuccessResult<number, InvalidAge>(ageValue);
}
