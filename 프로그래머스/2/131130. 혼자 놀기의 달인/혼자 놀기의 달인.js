function solution(cards) {
    const visited = Array(cards.length).fill(false);
    const groups = [];

    function openBox(start) {
        let current = start;
        let count = 0;
        while (!visited[current]) {
            visited[current] = true;
            count++;
            current = cards[current] - 1;
        }
        return count;
    }

    for (let i = 0; i < cards.length; i++) {
        if (!visited[i]) {
            const groupSize = openBox(i);
            groups.push(groupSize);
        }
    }

    // 상자 그룹이 하나뿐이라면 점수를 얻을 수 없음
    if (groups.length <= 1) return 0;

    // 가장 큰 두 그룹 찾기
    groups.sort((a, b) => b - a);
    return groups[0] * groups[1]; // 최고 점수 계산
}

