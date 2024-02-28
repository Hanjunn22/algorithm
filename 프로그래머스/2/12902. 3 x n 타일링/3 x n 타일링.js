function solution(n) {
    if (n % 2 !== 0) return 0; // n이 홀수인 경우, 정답이 없음

    const dp = new Array(n+1).fill(0);
    const mod = 1000000007;
    dp[0] = 1; // 기본 조건 설정
    dp[2] = 3; // n=2인 경우의 기본 값

    for (let i = 4; i <= n; i += 2) {
        dp[i] = dp[i-2] * 3; // 이전 경우의 수에 3을 곱함
        for (let j = i-4; j >= 0; j -= 2) {
            dp[i] = (dp[i] + dp[j] * 2) % mod; // 새롭게 발생하는 형태의 타일링을 추가
        }
    }

    return dp[n] % mod;
}
