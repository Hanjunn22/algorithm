function solution(board) {
    const n = board.length;

    // 상하좌우 대각선의 방향을 정의
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1], // 상, 하, 좌, 우
        [-1, -1], [-1, 1], [1, -1], [1, 1] // 대각선들
    ];

    // 위험 지역을 표시
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                for (const [dx, dy] of directions) {
                    const nx = i + dx;
                    const ny = j + dy;
                    
                    if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] !== 1) {
                        board[nx][ny] = -1; // 위험 지역을 -1로 표시
                    }
                }
            }
        }
    }

    // 안전 지역 카운트
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) safeCount++;
        }
    }

    return safeCount;
}