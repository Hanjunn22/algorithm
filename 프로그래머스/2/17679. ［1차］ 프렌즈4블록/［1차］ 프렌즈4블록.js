function solution(m, n, board) {
    board = board.map(v => v.split('')); // 문자열 배열을 2D 문자 배열로 변환
    let answer = 0;

    function search() {
        const toRemove = [];
        // 2x2 블록 탐색
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const block = board[i][j];
                if (block && block === board[i][j + 1] && block === board[i + 1][j] && block === board[i + 1][j + 1]) {
                    toRemove.push([i, j], [i, j + 1], [i + 1, j], [i + 1, j + 1]);
                }
            }
        }
        // 중복 제거
        const uniqueToRemove = Array.from(new Set(toRemove.map(JSON.stringify)), JSON.parse);
        // 블록 지우기
        uniqueToRemove.forEach(([i, j]) => {
            if (board[i][j]) {
                board[i][j] = null;
                answer++;
            }
        });
        return uniqueToRemove.length;
    }

    function dropBlocks() {
        for (let j = 0; j < n; j++) {
            for (let i = m - 1; i > 0; i--) {
                if (board[i][j] === null) {
                    let k = i - 1;
                    while (k >= 0 && board[k][j] === null) {
                        k--;
                    }
                    if (k >= 0) {
                        board[i][j] = board[k][j];
                        board[k][j] = null;
                    }
                }
            }
        }
    }

    while (search() > 0) {
        dropBlocks();
    }

    return answer;
}
