"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkBy = void 0;
function chunkBy(array, func) {
    if (array.length === 0) {
        return [];
    }
    var chunks = [];
    var previousResult;
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        var lastChunk = chunks[chunks.length - 1];
        if (!lastChunk) {
            chunks.push([element]);
            previousResult = func(element, index);
            continue;
        }
        var currentResult = func(element, index);
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
