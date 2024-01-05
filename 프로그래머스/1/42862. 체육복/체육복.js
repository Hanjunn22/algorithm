function solution(n, lost, reserve) {
    // 여벌 체육복을 가져온 학생이 도난당한 경우 제거
    lost = lost.filter(l => {
        const idx = reserve.indexOf(l);
        if (idx != -1) {
            reserve.splice(idx, 1);
            return false;
        }
        return true;
    });

    // 정렬
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    // 체육복 빌리기
    lost = lost.filter(l => {
        const prev = reserve.indexOf(l - 1);
        const next = reserve.indexOf(l + 1);
        if (prev != -1) {
            reserve.splice(prev, 1);
        } else if (next != -1) {
            reserve.splice(next, 1);
        } else {
            return true;
        }
        return false;
    });

    // 최대 학생 수 반환
    return n - lost.length;
}
