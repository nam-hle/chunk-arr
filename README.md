# Welcome to chunka
[![Version](https://img.shields.io/npm/v/chunk-arr.svg)](https://www.npmjs.com/package/chunk-arr)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D10-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![codecov](https://codecov.io/gh/nam288/chunk-arr/branch/main/graph/badge.svg?token=fbqIQ8uk7t)](https://codecov.io/gh/nam288/chunk-arr)

> A collection of utility functions to split an array into chunks by size or by certain condition

## Install

```sh
$ npm install open
```

## Usage


```js
const {chunk, chunkBy, chunkWhile} = require('chunk-arr');

// chunk: split array into fixed sub-arrays, like lodash/chunk
const chars = ['a', 'b', 'c', 'd', 'e'];
chunkArr.chunk(chars, 2);
// [ ['a', 'b'], ['c', 'd'], ['e'] ]

// chunkBy: chunk array elements together based on the return value of the a function
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
chunkBy(nums, num => num % 2);
// [ [3, 1], [4], [1, 5, 9], [2, 6], [5, 3, 5] ]

// chunkWhile: split chunks between two array elements (previous, current) when the passing function return false
const nums2 = [1, 2, 4, 9, 10, 11, 12, 15, 16, 19, 20, 21];
chunkWhile(nums2, (prev, curr) => prev + 1 === curr);
// [ [1, 2], [4], [9, 10, 11, 12], [15, 16], [19, 20, 21] ]
```

## API

### chunk(array, size = 1)

Work like lodash/chunk: creates an array of elements splits into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

#### array (Array): The array to process
#### [size=1] (number): The length of each chunk

```js
const { chunk } = require('chunk-arr');

const chars = ['a', 'b', 'c', 'd', 'e'];

console.log(chunk(chars));
// Output: [ ['a'], ['b'], ['c'], ['d'], ['e'] ]

console.log(chunk(chars, 2));
// Output: [ ['a', 'b'], ['c', 'd'], ['e'] ]

console.log(chunk(chars, 3));
// Output: [ ['a', 'b', 'c'], ['d', 'e'] ]
```

### chunkBy

Iterate over array elements, chunking them together based on the return value of the block.

Consecutive elements which return the same block value are chunked together.

#### array (Array<T>): The array to process
#### func <U>(element: T, index: number) => U: The function used to chunk array based on its return value

```js
const { chunkBy } = require('chunk-arr');

const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(chunkBy(nums, num => num % 2));
// Output: [ [3, 1], [4], [1, 5, 9], [2, 6], [5, 3, 5] ]
```

### chunkWhile

This method split each chunk using adjacent elements, elt_before and elt_after, in the receiver enumerator. This method split chunks between elt_before and elt_after where the block returns false.

#### array (Array<T>): The array to process
#### predicate (previous: T, current: T) => boolean: If it returns false, the array will split between those elements

```js
const { chunkWhile } = require('chunk-arr');

const nums = [1, 2, 4, 9, 10, 11, 12, 15, 16, 19, 20, 21];

console.log(chunkWhile(nums2, (prev, curr) => prev + 1 === curr));
// Output: [ [1, 2], [4], [9, 10, 11, 12], [15, 16], [19, 20, 21] ]
```

## Author

👤 **Nam Hoang Le**

## Show your support

Give a ⭐️ if this project helped you!
