function solution(elements) {
    let uniqueSums = new Set();
    let n = elements.length;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += elements[(i + j) % n];
            uniqueSums.add(sum);
        }
    }

    return uniqueSums.size;
}