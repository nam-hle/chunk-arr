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

	describe('when given a float size', () => {
		it('should convert to the floor one', () => {
			expect(chunk(['a', 'b', 'c', 'd'], -2.3)).to.be.deep.equal([]);
			expect(chunk(['a', 'b', 'c', 'd'], -1.4)).to.be.deep.equal([]);
			expect(chunk(['a', 'b', 'c', 'd'], -0.5)).to.be.deep.equal([]);
			expect(chunk(['a', 'b', 'c', 'd'], 1.6)).to.be.deep.equal([
				['a'],
				['b'],
				['c'],
				['d']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 2.7)).to.be.deep.equal([
				['a', 'b'],
				['c', 'd']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 3.8)).to.be.deep.equal([
				['a', 'b', 'c'],
				['d']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 4.9)).to.be.deep.equal([
				['a', 'b', 'c', 'd']
			]);
		});
	});

	describe('when given an integer size', () => {
		it('should work too', () => {
			expect(chunk([], 2)).to.be.deep.equal([]);
			expect(chunk(['a'], 3)).to.be.deep.equal([['a']]);
			expect(chunk(['a', 'b', 'c', 'd'], 1)).to.be.deep.equal([
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
			expect(chunk(['a', 'b', 'c', 'd'], 4)).to.be.deep.equal([
				['a', 'b', 'c', 'd']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 5)).to.be.deep.equal([
				['a', 'b', 'c', 'd']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 99)).to.be.deep.equal([
				['a', 'b', 'c', 'd']
			]);
			expect(chunk(['a', 'b', 'c', 'd'], 999)).to.be.deep.equal([
				['a', 'b', 'c', 'd']
			]);
		});
	});
});
