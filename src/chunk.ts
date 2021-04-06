export function chunk<T>(array: T[], size = 1): T[][] {
	const _size = Math.floor(size);
	const result: T[][] = [];

	if (_size < 1 || !Array.isArray(array)) {
		return [];
	}

	for (let index = 0; index < array.length; index += _size) {
		result.push(array.slice(index, index + _size));
	}

	return result;
}
