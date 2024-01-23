function solution(n, wires) {
    const createGraph = (wires) => {
        const graph = Array.from({ length: n + 1 }, () => []);
        wires.forEach(([v1, v2]) => {
            graph[v1].push(v2);
            graph[v2].push(v1);
        });
        return graph;
    };

    const countNodes = (graph, start, visited) => {
        let count = 1;
        visited[start] = true;
        for (let next of graph[start]) {
            if (!visited[next]) {
                count += countNodes(graph, next, visited);
            }
        }
        return count;
    };

    let minDifference = n;
    wires.forEach(([v1, v2], index) => {
        let graph = createGraph(wires.filter((_, i) => i !== index));
        let visited = Array(n + 1).fill(false);
        let count = countNodes(graph, v1, visited);
        minDifference = Math.min(minDifference, Math.abs(n - 2 * count));
    });

    return minDifference;
}
