"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkBy = void 0;
function chunkBy(array, func) {
    if (array.length === 0) {
        return [];
    }
    var chunks = [];
    var previousResult;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        var lastChunk = chunks[chunks.length - 1];
        if (!lastChunk) {
            chunks.push([element]);
            previousResult = func(element);
            continue;
        }
        var currentResult = func(element);
        if (currentResult === previousResult) {
            lastChunk.push(element);
        }
        else {
            chunks.push([element]);
            previousResult = currentResult;
        }
    }
    return chunks;
}
exports.chunkBy = chunkBy;
//# sourceMappingURL=index.js.map