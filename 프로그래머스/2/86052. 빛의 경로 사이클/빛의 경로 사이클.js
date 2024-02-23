function solution(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({length: rows}, () =>
        Array.from({length: cols}, () => Array(4).fill(false))
    );
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우
    const turns = {'L': [2, 3, 1, 0], 'R': [3, 2, 0, 1], 'S': [0, 1, 2, 3]};
    const cycleLengths = [];

    function dfs(startX, startY, dir) {
        let x = startX, y = startY, d = dir, length = 0;
        while (!visited[x][y][d]) {
            visited[x][y][d] = true;
            length++;
            const [dx, dy] = directions[d];
            x = (x + dx + rows) % rows;
            y = (y + dy + cols) % cols;
            d = turns[grid[x][y]][d];
        }
        return length === 0 ? 0 : length;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (let k = 0; k < 4; k++) {
                if (!visited[i][j][k]) {
                    const length = dfs(i, j, k);
                    if (length > 0) cycleLengths.push(length);
                }
            }
        }
    }

    return cycleLengths.sort((a, b) => a - b);
}
