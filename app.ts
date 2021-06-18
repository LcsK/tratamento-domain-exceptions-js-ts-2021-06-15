import { createPerson } from "./src/Person";


const person = createPerson({
	age: -1,
	nickname: 'lucas',
});

console.log(person);
