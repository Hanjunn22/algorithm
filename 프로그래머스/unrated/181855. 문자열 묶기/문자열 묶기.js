function solution(strArr) {
    const lengthCount = {};

    for (const str of strArr) {
        const len = str.length;
        lengthCount[len] = (lengthCount[len] || 0) + 1;
    }

    return Math.max(...Object.values(lengthCount));
}