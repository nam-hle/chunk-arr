export function chunkBy<T, U>(
	array: readonly T[],
	func: (element: T, index: number) => U
): T[][] {
	if (array.length === 0) {
		return [];
	}

	const chunks: T[][] = [];
	let previousResult: U | undefined;

	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		const lastChunk = chunks[chunks.length - 1];

		if (!lastChunk) {
			chunks.push([element]);
			previousResult = func(element, index);
			continue;
		}

		const currentResult = func(element, index);
		if (currentResult === previousResult) {
			lastChunk.push(element);
		} else {
			chunks.push([element]);
			previousResult = currentResult;
		}
	}

	return chunks;
}
