import {chunkBy} from './chunkBy';

export function chunk<T>(array: T[], size = 1): T[][] {
	if (size <= 0) {
		return [];
	}

	return chunkBy(array, (_current, index) => {
		return Math.floor(index / size);
	});
}
