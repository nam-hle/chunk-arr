import {expect} from 'chai';
import {chunkBy} from '../main/chunkBy';

describe('chunkBy', () => {
	const isEven = (number: number) => number % 2 === 0;
	const isOdd = (number: number) => number % 2 === 1;
	const basicArray = [3, 1, 4, 1, 5, 9, 2, 6];

	describe('given an empty array', () => {
		it('should return an empty array', () => {
			expect(chunkBy([], isEven)).to.be.deep.equal([]);
		});
	});

	describe('given an array with one element', () => {
		it('should return an array that contains one array with that element rega', () => {
			expect(chunkBy([3], isEven)).to.be.deep.equal([[3]]);
			expect(chunkBy([3], isOdd)).to.be.deep.equal([[3]]);
		});
	});

	describe(`given a number array`, () => {
		describe('given isEven func', () => {
			it('should chunk by modulo of each element ', () => {
				expect(chunkBy(basicArray, isEven)).to.be.deep.equal([
					[3, 1],
					[4],
					[1, 5, 9],
					[2, 6]
				]);
			});
		});

		describe('given isSmallerThanFive func', () => {
			it('should chunk when the element smaller than five', () => {
				expect(chunkBy(basicArray, (number) => number < 5)).to.be.deep.equal([
					[3, 1, 4, 1],
					[5, 9],
					[2],
					[6]
				]);
			});
		});
	});

	describe('given an array of objects', () => {
		it('should not copy the objects', () => {
			const users = [
				{username: 'abc', role: 'guest'},
				{username: 'xyz', role: 'guest'},
				{username: 'def', role: 'admin'}
			];

			const result = chunkBy(users, ({role}) => role === 'guest');

			expect(result).to.be.deep.equal([
				[
					{username: 'abc', role: 'guest'},
					{username: 'xyz', role: 'guest'}
				],
				[{username: 'def', role: 'admin'}]
			]);

			expect(result[0]?.[0]).to.be.equal(users[0]);
			expect(result[0]?.[1]).to.be.equal(users[1]);
			expect(result[1]?.[0]).to.be.equal(users[2]);
		});
	});

	describe('describe given a function used to chunk by size', () => {
		it('should chunk array by size', () => {
			expect(
				chunkBy([3, 1, 4, 1, 5, 9, 2, 6], (_, index) => Math.floor(index / 3))
			).to.be.deep.equal([
				[3, 1, 4],
				[1, 5, 9],
				[2, 6]
			]);
		});
	});
});
