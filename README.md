# Welcome to chunka
[![Version](https://img.shields.io/npm/v/chunk-arr.svg)](https://www.npmjs.com/package/chunk-arr)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D10-blue.svg)
[![codecov](https://codecov.io/gh/nam288/chunk-arr/branch/main/graph/badge.svg?token=fbqIQ8uk7t)](https://codecov.io/gh/nam288/chunk-arr)

> A collection of utility functions to split an array into chunks by size or by certain conditions.

## Install

```sh
$ npm install chunk-arr
```

## Usage


```js
const {chunkBy} = require('chunk-arr');

chunkBy([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], n => n % 2);
// [ [3, 1], [4], [1, 5, 9], [2, 6], [5, 3, 5] ]

```

## API

### `chunk(array, [size = 1])`

Work like lodash/chunk: split the `array` into groups the length of `size`. If array can not be split evenly, the final chunk will be the remaining elements.

#### array

* Require: `true`
* Type: `any[]`

The array to process

#### size

* Require: `false`
* Type: `number`
* Default: `1`

The expected length of each chunk

```js
const { chunk } = require('chunk-arr');

const chars = ['a', 'b', 'c', 'd', 'e'];

console.log(chunk(chars));
// Output: [ ['a'], ['b'], ['c'], ['d'], ['e'] ]

console.log(chunk(chars, 2));
// Output: [ ['a', 'b'], ['c', 'd'], ['e'] ]
```

### chunkBy(array, func)

Iterate over array elements, chunking them together based on the return value of the block.

Consecutive elements which return the same block value are chunked together.

#### array

* Require: `true`
* Type: `T[]`

The array to process

#### func

* Require: `true`
* Type: `(element: T, index: number): U`

The function used to chunk array based on its return value. It takes two arguments: the current element is iterating and its index

```js
const { chunkBy } = require('chunk-arr');

const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(chunkBy(nums, num => num % 2));
// Output: [ [3, 1], [4], [1, 5, 9], [2, 6], [5, 3, 5] ]
```

### chunkWhile(array, func)

This method splits each chunk using adjacent elements, `previous` and `current`, in the receiver enumerator. This method split chunks between `previous` and `current` where the block returns false.

#### array

* Require: `true`
* Type: `T[]`

The array to process

#### func

* Require: `true`
* Type: `(previous: T, current: T): boolean`

The function, which receives the `previous` and `current` element, uses to split array between them if it returns `false`

```js
const { chunkWhile } = require('chunk-arr');

const nums = [1, 2, 4, 9, 10, 11, 12, 15, 16, 19, 20, 21];

console.log(chunkWhile(nums, (prev, curr) => prev + 1 === curr));
// Output: [ [1, 2], [4], [9, 10, 11, 12], [15, 16], [19, 20, 21] ]
```

## Author

👤 **Nam Hoang Le**

## Show your support

Give a ⭐️ if this project helped you!
