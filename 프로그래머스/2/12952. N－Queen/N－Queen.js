function solution(n) {
    let count = 0; // 유효한 배치의 수
    let board = new Array(n); // 퀸의 위치를 저장할 배열
    board.fill(0);

    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            // 같은 열이나 대각선에 있는지 확인
            if (board[i] === col || Math.abs(board[i] - col) === row - i) {
                return false;
            }
        }
        return true;
    }

    function placeQueen(row) {
        if (row === n) { // 모든 퀸이 유효하게 배치되었다면
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row] = col; // 퀸 배치
                placeQueen(row + 1); // 다음 행에 퀸 배치 시도
                // 백트래킹은 여기서 자동으로 발생: 이전 단계로 돌아가서 다른 위치 시도
            }
        }
    }

    placeQueen(0); // 0번째 행부터 시작
    return count;
}
