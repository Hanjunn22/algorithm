function solution(N, stations, W) {
    let answer = 0;
    let position = 1; // 현재 검사해야 하는 아파트의 위치
    let index = 0; // 현재 검사 중인 기지국의 인덱스

    while (position <= N) {
        // 현재 위치가 다음 기지국의 커버 범위 안에 있는 경우
        if (index < stations.length && position >= stations[index] - W) {
            position = stations[index] + W + 1; // 다음으로 검사해야 할 위치 업데이트
            index++; // 다음 기지국으로 이동
        } else {
            // 필요한 추가 기지국 설치
            answer++;
            // 다음으로 검사해야 할 위치 업데이트 (현재 위치에서 전파 도달 범위를 고려하여 업데이트)
            position += (W * 2) + 1;
        }
    }

    return answer;
}
