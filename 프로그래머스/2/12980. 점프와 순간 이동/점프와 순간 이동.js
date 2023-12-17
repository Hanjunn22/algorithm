function solution(N) {
    let batteryUsage = 0;
    while (N > 0) {
        if (N % 2 === 1) { // 현재 거리가 홀수인 경우 점프 필요
            N -= 1; // 1만큼 점프
            batteryUsage += 1; // 건전지 사용량 증가
        }
        N = Math.floor(N / 2); // 현재 거리를 2로 나눔 (순간이동)
    }
    return batteryUsage;
}
