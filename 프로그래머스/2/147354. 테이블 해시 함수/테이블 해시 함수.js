function solution(data, col, row_begin, row_end) {
    // Step 1: 데이터 정렬
    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0]; // 첫 번째 컬럼(기본키) 기준 내림차순
        }
        return a[col - 1] - b[col - 1]; // col 번째 컬럼 기준 오름차순
    });

    // Step 2 & 3: S_i 계산 후 XOR 연산
    let result = 0;
    for (let i = row_begin; i <= row_end; i++) {
        let Si = data[i - 1].reduce((acc, cur, idx) => acc + (cur % i), 0);
        result ^= Si; // XOR 연산
    }

    return result;
}