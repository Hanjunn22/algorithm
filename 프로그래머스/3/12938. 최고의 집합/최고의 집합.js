function solution(n, s) {
    if (n > s) return [-1]; // 합 s를 n개의 자연수로 나눌 수 없는 경우

    let base = Math.floor(s / n); // 각 원소의 기본값
    let remainder = s % n; // 나누고 남은 나머지
    let result = new Array(n).fill(base); // 기본값으로 배열 초기화

    // 남은 나머지를 배열의 끝부터 골고루 분배
    for (let i = n - 1; remainder > 0; i--, remainder--) {
        result[i]++;
    }

    return result;
}
