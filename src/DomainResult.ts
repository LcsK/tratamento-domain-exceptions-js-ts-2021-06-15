export type Either <S, F> = SuccessResult <S, F> | FailureResult <S, F>;

export interface DomainResult <S, F> {
	value: S | F;
	isSuccess: () => boolean;
	isFailure: () => boolean;
}

export interface SuccessResult <S, F> extends DomainResult <S, F> {
	value: S;
	isSuccess: () => true;
	isFailure: () => false;
}

export interface FailureResult <S, F> extends DomainResult <S, F> {
	value: F;
	isSuccess: () => false;
	isFailure: () => true;
}

export const createSuccessResult = <S,F> (value: S): SuccessResult <S, F> => ({
	value,
	isSuccess: () => true,
	isFailure: () => false,
});

export const createFailureResult = <S,F> (value: F): FailureResult <S, F> => ({
	value,
	isSuccess: () => false,
	isFailure: () => true,
});
