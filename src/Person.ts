import { createAge } from "./Age";
import { DomainError } from "./DomainError";
import { createNickname } from "./Nickname";

export interface PersonValues {
	age: number;
	nickname: string;
}

export interface Person {
	age: number;
	nickname: string;
}

export const createPerson = (personValues: PersonValues): Person | DomainError => {
	const { age: ageValue, nickname: nicknameValue } = personValues;

	const age = createAge(ageValue);
	if (typeof age !== 'number' && (age as DomainError).name === 'InvalidAge') {
		return age;
	}

	const nickname = createNickname(nicknameValue);

	return {
		age: age as number,
		nickname,
	};
};
