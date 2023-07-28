function solution(n) {
    var factors = [];
    for (var i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) factors.push(n);
    var uniqueFactors = [...new Set(factors)];
    return uniqueFactors;
}
