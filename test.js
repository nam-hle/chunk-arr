"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("./index");
describe('chunkBy', function () {
    var isEven = function (number) { return number % 2 === 0; };
    var isOdd = function (number) { return number % 2 === 1; };
    var basicArray = [3, 1, 4, 1, 5, 9, 2, 6];
    describe('given an empty array', function () {
        it('should return an empty array', function () {
            chai_1.expect(index_1.chunkBy([], isEven)).to.be.deep.equal([]);
        });
    });
    describe('given an array with one element', function () {
        it('should return an array that contains one array with that element rega', function () {
            chai_1.expect(index_1.chunkBy([3], isEven)).to.be.deep.equal([[3]]);
            chai_1.expect(index_1.chunkBy([3], isOdd)).to.be.deep.equal([[3]]);
        });
    });
    describe("given a number array", function () {
        describe('given isEven func', function () {
            it('should chunk by modulo of each element ', function () {
                chai_1.expect(index_1.chunkBy(basicArray, isEven)).to.be.deep.equal([
                    [3, 1],
                    [4],
                    [1, 5, 9],
                    [2, 6]
                ]);
            });
        });
        describe('given isSmallerThanFive func', function () {
            it('should chunk when the element smaller than five', function () {
                chai_1.expect(index_1.chunkBy(basicArray, function (number) { return number < 5; })).to.be.deep.equal([
                    [3, 1, 4, 1],
                    [5, 9],
                    [2],
                    [6]
                ]);
            });
        });
    });
    describe('given an array of objects', function () {
        it('should not copy the objects', function () {
            var _a, _b, _c;
            var users = [
                { username: 'abc', role: 'guest' },
                { username: 'xyz', role: 'guest' },
                { username: 'def', role: 'admin' }
            ];
            var result = index_1.chunkBy(users, function (_a) {
                var role = _a.role;
                return role === 'guest';
            });
            chai_1.expect(result).to.be.deep.equal([
                [
                    { username: 'abc', role: 'guest' },
                    { username: 'xyz', role: 'guest' }
                ],
                [{ username: 'def', role: 'admin' }]
            ]);
            chai_1.expect((_a = result[0]) === null || _a === void 0 ? void 0 : _a[0]).to.be.equal(users[0]);
            chai_1.expect((_b = result[0]) === null || _b === void 0 ? void 0 : _b[1]).to.be.equal(users[1]);
            chai_1.expect((_c = result[1]) === null || _c === void 0 ? void 0 : _c[0]).to.be.equal(users[2]);
        });
    });
});
//# sourceMappingURL=test.js.map