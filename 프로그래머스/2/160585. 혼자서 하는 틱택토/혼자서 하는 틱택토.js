function checkWin(board, player) {
    // 가로, 세로, 대각선 검사
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
    return false;
}

function solution(board) {
    let oCount = 0, xCount = 0;
    board.forEach(row => {
        oCount += (row.match(/O/g) || []).length;
        xCount += (row.match(/X/g) || []).length;
    });

    if (oCount !== xCount && oCount !== xCount + 1) return 0; // "O"와 "X"의 개수 검증

    const oWin = checkWin(board, 'O');
    const xWin = checkWin(board, 'X');

    if (oWin && xWin) return 0; // 둘 다 승리할 수 없음
    if (oWin && oCount === xCount) return 0; // "O"가 승리했으나 "X"와 개수가 같음
    if (xWin && oCount > xCount) return 0; // "X"가 승리했으나 "O"의 개수가 더 많음

    return 1; // 위 조건에 해당하지 않으면 정상적인 게임판
}
