import { createAge, InvalidAge } from "./Age";
import { createNickname } from "./Nickname";

export interface PersonValues {
	age: number;
	nickname: string;
}

export interface Person {
	age: number;
	nickname: string;
}

export const createPerson = (personValues: PersonValues): Person | InvalidAge => {
	const { age: ageValue, nickname: nicknameValue } = personValues;

	const age = createAge(ageValue);
	if (typeof age !== 'number' && (age as InvalidAge).name === 'InvalidAge') {
		return age;
	}

	const nickname = createNickname(nicknameValue);

	return {
		age: age as number,
		nickname,
	};
};
