function solution(target) {
    // DP 테이블 초기화
    const dp = Array.from({ length: target + 1 }, () => [Infinity, 0]);
    dp[0] = [0, 0]; // 0점을 만드는데 필요한 다트 횟수는 0, 싱글 또는 불의 횟수도 0

    // 다트 점수 옵션
    const scores = [50]; // 불 추가
    for (let i = 1; i <= 20; i++) {
        scores.push(i); // 싱글
        scores.push(2 * i); // 더블
        scores.push(3 * i); // 트리플
    }

    // DP 적용
    for (let score = 1; score <= target; score++) {
        for (const point of scores) {
            if (score >= point) {
                const [dartCount, singleBullCount] = dp[score - point];
                if (dartCount + 1 < dp[score][0]) {
                    dp[score] = [dartCount + 1, singleBullCount + (point === 50 || point <= 20 ? 1 : 0)];
                } else if (dartCount + 1 === dp[score][0] && singleBullCount + (point === 50 || point <= 20 ? 1 : 0) > dp[score][1]) {
                    dp[score][1] += (point === 50 || point <= 20 ? 1 : 0);
                }
            }
        }
    }

    return dp[target];
}
