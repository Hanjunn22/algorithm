function solution(matrix_sizes) {
    const n = matrix_sizes.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(Infinity));

    // 단일 행렬의 최소 곱셈 연산 횟수는 0
    for (let i = 0; i < n; i++) {
        dp[i][i] = 0;
    }

    // l은 행렬 곱셈에 포함된 행렬의 개수
    for (let l = 2; l <= n; l++) {
        for (let i = 0; i <= n - l; i++) {
            let j = i + l - 1;
            for (let k = i; k < j; k++) {
                let cost = dp[i][k] + dp[k + 1][j] + matrix_sizes[i][0] * matrix_sizes[k][1] * matrix_sizes[j][1];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }

    return dp[0][n - 1];
}
