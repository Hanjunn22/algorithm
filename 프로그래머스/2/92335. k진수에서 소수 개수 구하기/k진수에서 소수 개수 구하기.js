function solution(n, k) {
    // k진수로 변환
    const kBaseNumber = n.toString(k);

    // 0을 기준으로 나누고 소수인지 확인
    const candidates = kBaseNumber.split('0').filter(num => num !== '' && isPrime(parseInt(num)));

    // 소수의 개수 반환
    return candidates.length;
}

// 소수 판별 함수
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
