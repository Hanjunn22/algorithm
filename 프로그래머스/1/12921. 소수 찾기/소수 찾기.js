function solution(n) {
    let arr = Array(n+1).fill(true);  // 모든 숫자를 처음에는 소수로 가정
    arr[0] = false;  // 0은 소수가 아님
    arr[1] = false;  // 1은 소수가 아님

    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {  // i가 소수인 경우
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;  // i의 배수는 소수가 아님
            }
        }
    }

    return arr.filter(val => val).length;  // 소수인 값들만 필터링 후 개수 반환
}