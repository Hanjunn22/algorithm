function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from(Array(rows), () => Array(cols).fill(false));

    // DFS 함수
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= rows || y >= cols || maps[x][y] === 'X' || visited[x][y]) {
            return 0;
        }
        visited[x][y] = true;
        return parseInt(maps[x][y]) + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
    }

    const results = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                const food = dfs(i, j);
                if (food > 0) results.push(food);
            }
        }
    }

    return results.length > 0 ? results.sort((a, b) => a - b) : [-1];
}