function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n; // 최대 시간 설정
    let answer = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0); // mid 시간 동안 처리할 수 있는 총 사람 수

        if (sum >= n) { // 모든 사람을 처리할 수 있으면, 최대 시간을 줄인다
            answer = mid; // 가능한 최소 시간 업데이트
            right = mid - 1;
        } else { // 모든 사람을 처리할 수 없으면, 최소 시간을 늘린다
            left = mid + 1;
        }
    }

    return answer;
}