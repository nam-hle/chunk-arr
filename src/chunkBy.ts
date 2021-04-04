import {chunkBase} from './chunkBase';

export function chunkBy<T, U>(
	array: readonly T[],
	func: (element: T, index: number) => U
): T[][] {
	return chunkBase(array, (previous, current, index) => {
		return func(previous, index - 1) !== func(current, index);
	});
}
