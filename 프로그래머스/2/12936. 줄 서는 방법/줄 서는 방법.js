function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function solution(n, k) {
    let answer = [];
    let numbers = Array.from({length: n}, (_, i) => i + 1);
    k -= 1; // 0 인덱스 기반으로 조정

    while (n > 0) {
        n--;
        let fact = factorial(n);
        let index = Math.floor(k / fact);
        answer.push(numbers[index]);
        numbers.splice(index, 1);
        k %= fact;
    }

    return answer;
}