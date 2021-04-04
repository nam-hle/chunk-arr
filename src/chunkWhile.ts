import {chunkBase} from './chunkBase';

export function chunkWhile<T>(
	array: readonly T[],
	predicate: (previous: T, current: T) => boolean
): T[][] {
	return chunkBase(array, (previous, current) => {
		return !predicate(previous, current);
	});
}
