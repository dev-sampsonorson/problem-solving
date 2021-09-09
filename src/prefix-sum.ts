import { Utility } from "./common/utility";

function rangeSum(data: number[], startIndex: number, endIndex: number) {
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i] + (data[i - 1] ?? 0);
        // data[i] = i === 0 ? data[i] : data[i] + data[i - 1];
    }

    let sum = data[endIndex] - (data[startIndex - 1] ?? 0);

    return `(${startIndex} - ${endIndex}) => ${sum}`;
}

console.log(rangeSum([6, 3, -2, 4, -1, 0, -5], 2, 6));
console.log(rangeSum([6, 3, -2, 4, -1, 0, -5], 3, 5));