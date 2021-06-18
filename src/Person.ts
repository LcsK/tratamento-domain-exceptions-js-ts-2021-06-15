import { Either, createFailureResult, createSuccessResult } from "./DomainResult";
import { createAge, InvalidAge } from "./Age";
import { createNickname, EmptyNickname } from "./Nickname";
import { DomainError } from "./DomainError";

export type InvalidPersonStates = InvalidAge | EmptyNickname;

export interface PersonValues {
	age: number;
	nickname: string;
}

export interface Person {
	age: number;
	nickname: string;
}

// InvalidPerson e InvalidAge poderiam compartilhar uma interface genérica em comum
export interface InvalidPerson extends DomainError {
	name: 'InvalidPerson',
	invalidStates: InvalidPersonStates[],
}

const createInvalidPerson = (invalidPersonStates: InvalidPersonStates[]): InvalidPerson => ({
	name: 'InvalidPerson',
	invalidStates: invalidPersonStates,
	message: 'Pessoa inválida!',
});

export const createPerson = (personValues: PersonValues): Either<Person, InvalidPerson> => {
	const invalidPersonStates: InvalidPersonStates[] = [];
	const { age: ageValue, nickname: nicknameValue } = personValues;

	const ageResult = createAge(ageValue);
	const nicknameResult = createNickname(nicknameValue);

	if (ageResult.isFailure()) {
		invalidPersonStates.push(ageResult.value as InvalidAge);
	}
	if (nicknameResult.isFailure()) {
		invalidPersonStates.push(nicknameResult.value as EmptyNickname);
	}
	if (invalidPersonStates.length) {
		return createFailureResult<Person, InvalidPerson>(
			createInvalidPerson(invalidPersonStates),
		);
	}

	return createSuccessResult<Person, InvalidPerson>({
		age: ageResult.value as number,
		nickname: nicknameResult.value as string,
	});
};
