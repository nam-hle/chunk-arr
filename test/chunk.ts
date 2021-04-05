import {expect} from 'chai';
import {chunk} from '../src';

describe('chunk', () => {
	describe('when not given size', () => {
		it('should use size = 1', () => {
			expect(chunk([])).to.be.deep.equal([]);
			expect(chunk(['a'])).to.be.deep.equal([['a']]);
			expect(chunk(['a', 'b', 'c', 'd'])).to.be.deep.equal([
				['a'],
				['b'],
				['c'],
				['d']
			]);
		});
	});

	describe('when given size smaller than 1', () => {
		it('should return empty array', () => {
			expect(chunk([], 0)).to.be.deep.equal([]);
			expect(chunk(['a'], -1)).to.be.deep.equal([]);
			expect(chunk(['a', 'b', 'c', 'd'], -2)).to.be.deep.equal([]);
		});
	});

	describe('when given a size explicitly', () => {
		it('should work too', () => {
			expect(chunk([], 2)).to.be.deep.equal([]);
			expect(chunk(['a'], 3)).to.be.deep.equal([['a']]);
			expect(chunk(['a', 'b', 'c', 'd'], 1)).to.be.deep.equal([
				['a'],
				['b'],
				['c'],
				['d']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 1.3)).to.be.deep.equal([
				['a'],
				['b'],
				['c'],
				['d']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 2)).to.be.deep.equal([
				['a', 'b'],
				['c', 'd']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 3)).to.be.deep.equal([
				['a', 'b', 'c'],
				['d']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 3.5)).to.be.deep.equal([
				['a', 'b', 'c'],
				['d']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 4)).to.be.deep.equal([
				['a', 'b', 'c', 'd']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 5)).to.be.deep.equal([
				['a', 'b', 'c', 'd']
			]);
		});
	});
});
