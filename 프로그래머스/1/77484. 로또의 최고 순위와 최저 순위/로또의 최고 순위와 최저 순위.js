function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];  // 매칭된 번호 개수에 따른 순위
    let matchCount = 0;  // 매칭된 번호의 개수
    let zeros = 0;  // 알 수 없는 번호의 개수

    // 매칭된 번호와 알 수 없는 번호의 개수를 계산
    lottos.forEach(lotto => {
        if (win_nums.includes(lotto)) {
            matchCount++;
        } else if (lotto === 0) {
            zeros++;
        }
    });

    // 최고 순위와 최저 순위 계산
    let maxRank = rank[matchCount + zeros];  // 최대 매칭 가능한 번호를 포함
    let minRank = rank[matchCount];  // 알 수 없는 번호를 제외하고 매칭된 번호만 포함

    return [maxRank, minRank];
}