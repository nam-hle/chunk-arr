export function chunkBy<T, U>(
	array: readonly T[],
	func: (value: T) => U
): T[][] {
	if (array.length === 0) {
		return [];
	}

	const result: T[][] = [];
	let previous: U | undefined;

	for (const element of array) {
		const previousChunk = result[result.length - 1];

		if (!previousChunk) {
			result.push([element]);
			previous = func(element);
			continue;
		}

		const curr = func(element);
		if (curr === previous) {
			previousChunk.push(element);
		} else {
			previous = curr;
			result.push([element]);
		}
	}

	return result;
}
