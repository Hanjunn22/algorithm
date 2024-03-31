function solution(gems) {
    const gemKinds = new Set(gems).size;
    const gemMap = new Map();
    let answer = [0, gems.length - 1];
    let start = 0;
    let end = 0;

    gemMap.set(gems[0], 1);

    while (start <= end && end < gems.length) {
        if (gemMap.size === gemKinds) { // 모든 종류의 보석을 포함하면
            if (end - start < answer[1] - answer[0]) { // 더 짧은 구간을 찾으면
                answer = [start, end];
            }
            gemMap.set(gems[start], gemMap.get(gems[start]) - 1);
            if (gemMap.get(gems[start]) === 0) {
                gemMap.delete(gems[start]);
            }
            start++;
        } else { // 모든 종류의 보석을 포함하지 않으면
            end++;
            if (end === gems.length) break;
            gemMap.set(gems[end], (gemMap.get(gems[end]) || 0) + 1);
        }
    }

    return [answer[0] + 1, answer[1] + 1]; // 진열대 번호는 1부터 시작하므로
}
