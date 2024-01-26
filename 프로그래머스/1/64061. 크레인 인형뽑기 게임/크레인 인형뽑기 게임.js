function solution(board, moves) {
    let stack = [];
    let count = 0;

    moves.forEach(move => {
        let column = move - 1;

        for (let row = 0; row < board.length; row++) {
            let doll = board[row][column];
            if (doll !== 0) {
                // 인형을 집어 올림
                board[row][column] = 0;

                // 바구니에 인형을 넣고, 같은 인형이 연속되면 제거
                if (stack[stack.length - 1] === doll) {
                    stack.pop();
                    count += 2;
                } else {
                    stack.push(doll);
                }
                break;
            }
        }
    });

    return count;
}