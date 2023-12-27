function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;

    // 특정 문자의 위치를 찾는 함수
    function findPosition(char) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (maps[i][j] === char) return [i, j];
            }
        }
    }

    // BFS를 이용한 최단 경로 찾기 함수
    function bfs(start, end) {
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        const queue = [[...start, 0]]; // [row, col, distance]
        visited[start[0]][start[1]] = true;

        while (queue.length) {
            const [row, col, distance] = queue.shift();
            if (row === end[0] && col === end[1]) return distance;

            [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dr, dc]) => {
                const newRow = row + dr;
                const newCol = col + dc;
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                    if (!visited[newRow][newCol] && maps[newRow][newCol] !== 'X') {
                        visited[newRow][newCol] = true;
                        queue.push([newRow, newCol, distance + 1]);
                    }
                }
            });
        }
        return -1; // 경로가 없는 경우
    }

    const start = findPosition('S');
    const lever = findPosition('L');
    const exit = findPosition('E');

    const toLever = bfs(start, lever);
    if (toLever === -1) return -1;

    const toExit = bfs(lever, exit);
    if (toExit === -1) return -1;

    return toLever + toExit;
}
