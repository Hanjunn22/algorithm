function solution(board) {
    const height = board.length;
    const width = board[0].length;
    let maxSquareSide = 0;

    // 표가 1x1 크기이거나 모든 값이 0인 경우를 먼저 처리
    if (height < 2 || width < 2) {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (board[i][j] === 1) return 1; // 1x1 정사각형 발견
            }
        }
        return 0; // 정사각형 없음
    }

    // DP를 사용하여 각 칸을 오른쪽 하단 모서리로 하는 가장 큰 정사각형의 한 변의 길이 계산
    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1;
                maxSquareSide = Math.max(maxSquareSide, board[i][j]);
            }
        }
    }

    return maxSquareSide * maxSquareSide; // 가장 큰 정사각형의 넓이 반환
}
