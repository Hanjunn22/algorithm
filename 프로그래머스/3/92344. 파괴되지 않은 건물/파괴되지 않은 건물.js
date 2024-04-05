function solution(board, skill) {
    let n = board.length;
    let m = board[0].length;
    let prefixSum = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

    // 스킬 적용
    skill.forEach(([type, r1, c1, r2, c2, degree]) => {
        degree = type === 1 ? -degree : degree; // 공격인 경우 음수로, 회복인 경우 양수로 변환
        prefixSum[r1][c1] += degree;
        prefixSum[r1][c2 + 1] -= degree;
        prefixSum[r2 + 1][c1] -= degree;
        prefixSum[r2 + 1][c2 + 1] += degree;
    });

    // 누적 합 계산
    // 행 방향 누적 합
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            prefixSum[i][j] += prefixSum[i][j - 1];
        }
    }

    // 열 방향 누적 합
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            prefixSum[i][j] += prefixSum[i - 1][j];
        }
    }

    // 파괴되지 않은 건물 계산
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            board[i][j] += prefixSum[i][j];
            if (board[i][j] > 0) {
                count++;
            }
        }
    }

    return count;
}
