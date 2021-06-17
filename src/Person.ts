import { createAge } from "./Age";
import { createNickname } from "./Nickname";

export interface PersonValues {
	age: number;
	nickname: string;
}

export interface Person {
	age: number;
	nickname: string;
}

export const createPerson = (personValues: PersonValues): Person => {
	const { age: ageValue, nickname: nicknameValue } = personValues;

	let age;
	try {
		age = createAge(ageValue);
	} catch (error) {
		console.log(error.name);
		console.log(error.message);
		console.log(error.stack);
		throw error;
	}

	const nickname = createNickname(nicknameValue);

	return {
		age,
		nickname,
	};
};
