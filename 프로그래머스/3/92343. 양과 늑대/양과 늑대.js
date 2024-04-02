function solution(info, edges) {
    let graph = Array.from(Array(info.length), () => []);
    edges.forEach(([parent, child]) => {
        graph[parent].push(child); // 인접 리스트 생성
    });

    let maxSheep = 0;

    function dfs(node, sheep, wolf, visited) {
        if (info[node] === 0) sheep++; else wolf++;
        if (wolf >= sheep) return; // 늑대 수가 양보다 많으면 종료
        maxSheep = Math.max(maxSheep, sheep);

        let newVisited = new Set(visited);
        newVisited.add(node);

        for (let nextNode of newVisited) {
            graph[nextNode].forEach(child => {
                if (!newVisited.has(child)) {
                    dfs(child, sheep, wolf, newVisited); // 자식 노드로 DFS 재귀 호출
                }
            });
        }
    }

    dfs(0, 0, 0, new Set()); // 루트 노드에서 시작
    return maxSheep;
}
