export function chunkBase<T>(
	array: readonly T[],
	beginNewChunk: (previous: T, current: T, index: number) => boolean
): T[][] {
	if (array.length === 0) {
		return [];
	}

	const chunks: T[][] = [[array[0]]];

	for (let index = 1; index < array.length; index++) {
		const currentElement = array[index];
		const previousElement = array[index - 1];

		const result = beginNewChunk(previousElement, currentElement, index);
		if (result) {
			chunks.push([currentElement]);
		} else {
			chunks[chunks.length - 1].push(currentElement);
		}
	}

	return chunks;
}
