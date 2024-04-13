function solution(n, lighthouse) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const include = Array(n + 1).fill(0);
    const exclude = Array(n + 1).fill(0);
    const visited = Array(n + 1).fill(false);

    // 그래프 구성
    lighthouse.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    function iterativeDFS(root) {
        const stack = [root];
        const order = []; // 후위 순회 결과를 저장
        visited[root] = true;

        while (stack.length > 0) {
            const node = stack.pop();
            order.push(node);
            graph[node].forEach(child => {
                if (!visited[child]) {
                    visited[child] = true;
                    stack.push(child);
                }
            });
        }

        // 후위 순회를 통해 DP 값을 계산
        while (order.length > 0) {
            const node = order.pop();
            include[node] = 1; // 자신을 포함
            exclude[node] = 0; // 자신을 제외
            graph[node].forEach(child => {
                if (include[child] !== undefined) {
                    include[node] += Math.min(include[child], exclude[child]);
                    exclude[node] += include[child];
                }
            });
        }
    }

    iterativeDFS(1); // 루트 노드(임의로 1번 노드)에서 시작
    return Math.min(include[1], exclude[1]);
}
