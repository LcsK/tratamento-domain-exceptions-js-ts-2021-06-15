import { createPerson } from "./src/Person";


const wrongPerson = createPerson({
	age: -1.4,
	nickname: '',
});
const negativeAgePerson = createPerson({
	age: -1,
	nickname: 'lcsk',
});
const nonIntegerAgePerson = createPerson({
	age: 1.4,
	nickname: 'lcsk',
});
const emptyNicknamePerson = createPerson({
	age: 1,
	nickname: '',
});
const person = createPerson({
	age: 1,
	nickname: 'lcsk',
});

console.log(`----\nWrong Person:\n${JSON.stringify(wrongPerson.value, null, 1)}\n----\n`);
console.log(`----\nNegativeAge Person:\n${JSON.stringify(negativeAgePerson.value, null, 1)}\n----\n`);
console.log(`----\nNonIntegerAge Person:\n${JSON.stringify(nonIntegerAgePerson.value, null, 1)}\n----\n`);
console.log(`----\nEmptyNickname Person:\n${JSON.stringify(emptyNicknamePerson.value, null, 1)}\n----\n`);
console.log(`----\nPerson:\n${JSON.stringify(person.value, null, 1)}\n----\n`);
