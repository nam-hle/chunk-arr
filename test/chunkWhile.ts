import {expect} from 'chai';
import {chunkBy, chunkWhile} from '../src';

describe('chunkWhile', () => {
	describe('given an empty array', () => {
		it('should return an empty array', () => {
			expect(chunkBy([], () => 1)).to.be.deep.equal([]);
		});
	});

	describe('given function: (previous, current) => previous + 1 === current', () => {
		it('should chunk into one-by-one increasing subsequences', () => {
			expect(
				chunkWhile(
					[1, 2, 4, 9, 10, 11, 12, 15, 16, 19, 20, 21],
					(previous, current) => previous + 1 === current
				)
			).to.be.deep.equal([
				[1, 2],
				[4],
				[9, 10, 11, 12],
				[15, 16],
				[19, 20, 21]
			]);
		});
	});
	describe('given function: (previous, current) => previous <= current', () => {
		it('should chunk into non-decreasing subsequences', () => {
			expect(
				chunkWhile(
					[0, 9, 2, 2, 3, 2, 7, 5, 9, 5],
					(previous, current) => previous <= current
				)
			).to.be.deep.equal([[0, 9], [2, 2, 3], [2, 7], [5, 9], [5]]);
		});
	});

	describe('given function: (previous, current) => previous % 2 === current % 2)', () => {
		it('should chunk by parity', () => {
			expect(
				chunkWhile(
					[7, 5, 9, 2, 0, 7, 9, 4, 2, 0],
					(previous, current) => previous % 2 === current % 2
				)
			).to.be.deep.equal([
				[7, 5, 9],
				[2, 0],
				[7, 9],
				[4, 2, 0]
			]);
		});
	});
});
