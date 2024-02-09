function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));
    
    // 그래프 초기화
    road.forEach(([a, b, c]) => {
        graph[a][b] = Math.min(graph[a][b], c);
        graph[b][a] = Math.min(graph[b][a], c);
    });
    
    // 다익스트라 알고리즘을 위한 준비
    const dist = Array(N + 1).fill(Infinity);
    const visited = Array(N + 1).fill(false);
    dist[1] = 0; // 시작점은 거리가 0
    
    for (let i = 1; i <= N; i++) {
        let minDistance = Infinity;
        let minIndex = -1;
        
        // 방문하지 않은 노드 중 최단 거리 노드 찾기
        for (let j = 1; j <= N; j++) {
            if (!visited[j] && dist[j] < minDistance) {
                minDistance = dist[j];
                minIndex = j;
            }
        }
        
        visited[minIndex] = true;
        
        // 선택된 노드를 경유지로 하여 다른 노드의 거리를 갱신
        for (let j = 1; j <= N; j++) {
            if (!visited[j] && graph[minIndex][j] < Infinity) {
                dist[j] = Math.min(dist[j], dist[minIndex] + graph[minIndex][j]);
            }
        }
    }
    
    // K 이하 거리에 있는 마을의 개수 세기
    return dist.filter(distance => distance <= K).length;
}
