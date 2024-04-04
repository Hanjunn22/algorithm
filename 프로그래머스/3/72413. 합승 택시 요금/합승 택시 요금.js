function solution(n, s, a, b, fares) {
    const INF = Number.MAX_SAFE_INTEGER;
    const cost = Array.from(Array(n), () => Array(n).fill(INF));

    // 자기 자신으로의 비용은 0으로 초기화
    for (let i = 0; i < n; i++) {
        cost[i][i] = 0;
    }

    // 주어진 요금으로 비용 행렬 초기화
    fares.forEach(([c, d, f]) => {
        cost[c - 1][d - 1] = f;
        cost[d - 1][c - 1] = f;
    });

    // 플로이드-워셜 알고리즘으로 모든 쌍의 최소 비용 계산
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (cost[i][k] + cost[k][j] < cost[i][j]) {
                    cost[i][j] = cost[i][k] + cost[k][j];
                }
            }
        }
    }

    // 합승하여 이동한 후 각자 목적지까지 가는 최소 비용 계산
    let answer = INF;
    for (let i = 0; i < n; i++) {
        const sharedCost = cost[s - 1][i];
        const separateCost = cost[i][a - 1] + cost[i][b - 1];
        answer = Math.min(answer, sharedCost + separateCost);
    }

    return answer;
}
