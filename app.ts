import { createPerson } from "./src/Person";

try {
	createPerson({
		age: -1,
		nickname: 'lucas',
	})
} catch (error) {
	console.error('--- app.ts');
	console.error(error);
}
