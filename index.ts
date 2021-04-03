export function chunkBy<T, U>(
	array: readonly T[],
	func: (value: T) => U
): T[][] {
	if (array.length === 0) {
		return [];
	}

	const chunks: T[][] = [];
	let previousResult: U | undefined;

	for (const element of array) {
		const lastChunk = chunks[chunks.length - 1];

		if (!lastChunk) {
			chunks.push([element]);
			previousResult = func(element);
			continue;
		}

		const currentResult = func(element);
		if (currentResult === previousResult) {
			lastChunk.push(element);
		} else {
			chunks.push([element]);
			previousResult = currentResult;
		}
	}

	return chunks;
}
