function hanoi(n, start, end, via) {
    if (n === 1) {
        return [[start, end]];
    } else {
        return [
            ...hanoi(n - 1, start, via, end), // Step 1: N-1 원판을 start에서 via로 이동
            [start, end], // Step 2: 가장 큰 원판을 start에서 end로 이동
            ...hanoi(n - 1, via, end, start) // Step 3: N-1 원판을 via에서 end로 이동
        ];
    }
}

function solution(n) {
    return hanoi(n, 1, 3, 2);
}
