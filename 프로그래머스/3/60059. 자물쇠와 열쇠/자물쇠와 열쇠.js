function rotateKey(key) {
    const M = key.length;
    const rotated = Array.from(Array(M), () => Array(M).fill(0));
    for (let r = 0; r < M; r++) {
        for (let c = 0; c < M; c++) {
            rotated[c][M-1-r] = key[r][c];
        }
    }
    return rotated;
}

function match(key, lock, startRow, startCol) {
    const N = lock.length;
    const M = key.length;
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const keyRow = r - startRow;
            const keyCol = c - startCol;
            if (keyRow >= 0 && keyRow < M && keyCol >= 0 && keyCol < M) {
                if (key[keyRow][keyCol] === 1 && lock[r][c] === 1) return false;
                if (key[keyRow][keyCol] === 0 && lock[r][c] === 0) return false;
            } else {
                if (lock[r][c] === 0) return false;
            }
        }
    }
    return true;
}

function solution(key, lock) {
    const N = lock.length;
    const M = key.length;
    const expandedSize = N + 2 * (M - 1);
    
    for (let rotation = 0; rotation < 4; rotation++) {
        for (let row = 0; row <= expandedSize - M; row++) {
            for (let col = 0; col <= expandedSize - M; col++) {
                if (match(key, lock, row - (M - 1), col - (M - 1))) {
                    return true;
                }
            }
        }
        key = rotateKey(key);
    }
    
    return false;
}