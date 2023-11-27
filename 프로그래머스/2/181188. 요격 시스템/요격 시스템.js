function solution(targets) {
    // targets를 끝점(e)을 기준으로 정렬
    targets.sort((a, b) => a[1] - b[1]);

    let count = 1; // 첫 요격 미사일
    let position = targets[0][1]; // 첫 요격 미사일의 위치 (첫 범위의 끝점)

    // 모든 폭격 미사일 범위를 확인
    for (let i = 1; i < targets.length; i++) {
        // 현재 위치가 다음 폭격 미사일의 시작점보다 앞에 있으면 요격 가능
        if (position > targets[i][0]) {
            continue;
        }
        // 그렇지 않으면 새로운 요격 미사일 배치
        count++;
        position = targets[i][1];
    }

    // 요격 미사일의 총 개수 반환
    return count;
}
