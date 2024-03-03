function solution(n, roads, sources, destination) {
    const graph = Array.from({ length: n + 1 }, () => []);
    roads.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    // 목적지에서 시작하는 BFS 실행
    const distance = Array(n + 1).fill(-1); // -1로 초기화
    distance[destination] = 0; // 목적지에서 목적지까지의 거리는 0
    const queue = [destination];

    while (queue.length) {
        const current = queue.shift();

        for (const next of graph[current]) {
            if (distance[next] === -1) { // 아직 방문하지 않은 지역
                distance[next] = distance[current] + 1;
                queue.push(next);
            }
        }
    }

    // 각 소스에서 목적지까지의 최단 거리 조회
    return sources.map(source => distance[source]);
}
