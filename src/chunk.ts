import {chunkBy} from './chunkBy';

export function chunk<T>(array: T[], size = 1): T[][] {
	const _size = Math.floor(size);

	if (_size < 1) {
		return [];
	}

	return chunkBy(array, (_, index) => Math.floor(index / _size));
}
