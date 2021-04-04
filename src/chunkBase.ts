export function chunkBase<T>(
	array: readonly T[],
	needToSplit: (previous: T, current: T, index: number) => boolean
): T[][] {
	if (array.length === 0) {
		return [];
	}

	const result: T[][] = [[array[0]]];

	for (let index = 1; index < array.length; index++) {
		const [previousElement, currentElement] = [array[index - 1], array[index]];

		if (needToSplit(previousElement, currentElement, index)) {
			result.push([currentElement]);
		} else {
			result[result.length - 1].push(currentElement);
		}
	}

	return result;
}
