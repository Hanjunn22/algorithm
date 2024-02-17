function solution(rows, columns, queries) {
    let answer = [];
    // 행렬 초기화
    let matrix = new Array(rows).fill(0).map((_, i) => 
                  new Array(columns).fill(0).map((_, j) => i * columns + j + 1));

    queries.forEach(query => {
        const [x1, y1, x2, y2] = query.map(a => a - 1);
        let temp = matrix[x1][y1]; // 시작 지점 값 저장
        let min = temp;

        // 상단 이동
        for (let i = x1; i < x2; i++) {
            matrix[i][y1] = matrix[i + 1][y1];
            min = Math.min(min, matrix[i][y1]);
        }
        // 우측 이동
        for (let i = y1; i < y2; i++) {
            matrix[x2][i] = matrix[x2][i + 1];
            min = Math.min(min, matrix[x2][i]);
        }
        // 하단 이동
        for (let i = x2; i > x1; i--) {
            matrix[i][y2] = matrix[i - 1][y2];
            min = Math.min(min, matrix[i][y2]);
        }
        // 좌측 이동
        for (let i = y2; i > y1; i--) {
            matrix[x1][i] = matrix[x1][i - 1];
            min = Math.min(min, matrix[x1][i]);
        }

        matrix[x1][y1 + 1] = temp; // 임시로 저장해둔 값 이동
        answer.push(min); // 이동한 값 중 최솟값을 결과 배열에 추가
    });

    return answer;
}
