function solution(n, money) {
    const MOD = 1000000007;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 0원을 만드는 방법은 아무것도 선택하지 않는 것 1가지

    money.forEach((coin) => {
        for (let i = coin; i <= n; i++) {
            dp[i] = (dp[i] + dp[i - coin]) % MOD;
        }
    });

    return dp[n];
}
