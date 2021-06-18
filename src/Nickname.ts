import { Either, createFailureResult, createSuccessResult } from "./DomainResult";
import { DomainError } from "./DomainError";

export interface EmptyNickname extends DomainError {
	name: 'EmptyNickname';
}

const createEmptyNickname = (): EmptyNickname => ({
	name: 'EmptyNickname',
	message: `Nickname should not be an empty string`,
});

export const createNickname = (nicknameValue: string): Either<string, EmptyNickname> => {
	if (!nicknameValue) {
		return createFailureResult<string, EmptyNickname>(
			createEmptyNickname(),
		);
	}
	return createSuccessResult<string, EmptyNickname>(
		nicknameValue,
	);
}
