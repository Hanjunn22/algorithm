function solution(n, left, right) {
    let result = [];

    for (let i = left; i <= right; i++) {
        let row = Math.floor(i / n);
        let col = i % n;
        let value = Math.max(row, col) + 1;

        result.push(value);
    }

    return result;
}