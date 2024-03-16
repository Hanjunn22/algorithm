function canCross(stones, k, mid) {
    let skip = 0; // 연속으로 건너뛴 디딤돌의 수
    for (let i = 0; i < stones.length; i++) {
        if (stones[i] < mid) {
            skip++;
            if (skip >= k) return false;
        } else {
            skip = 0;
        }
    }
    return true;
}

function solution(stones, k) {
    let left = 1; // 최소 1명은 건널 수 있음
    let right = 200000000; // 문제에서 주어진 최대 값
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canCross(stones, k, mid)) {
            answer = mid; // mid명이 건널 수 있다면, 최소 answer을 mid로 설정
            left = mid + 1; // 더 많은 인원이 건널 수 있는지 확인
        } else {
            right = mid - 1; // 더 적은 인원으로 설정하여 다시 확인
        }
    }

    return answer;
}
