function solution(N, A, B) {
    let round = 0;

    while (A !== B) {
        // 참가자 번호를 다음 라운드 번호로 업데이트
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);

        // 라운드 수 증가
        round++;
    }

    return round;
}
