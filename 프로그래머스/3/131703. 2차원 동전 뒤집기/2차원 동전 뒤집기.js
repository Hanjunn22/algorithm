function solution(beginning, target) {
    const rows = beginning.length;
    const cols = beginning[0].length;
    let minFlips = Infinity;

    // 모든 뒤집기 조합 시도
    for (let rowFlip = 0; rowFlip < (1 << rows); ++rowFlip) {
        for (let colFlip = 0; colFlip < (1 << cols); ++colFlip) {
            let flips = 0;
            const current = JSON.parse(JSON.stringify(beginning)); // 깊은 복사

            // 행 뒤집기 적용
            for (let r = 0; r < rows; ++r) {
                if (rowFlip & (1 << r)) {
                    flips++;
                    for (let c = 0; c < cols; ++c) {
                        current[r][c] = 1 - current[r][c]; // 뒤집기
                    }
                }
            }

            // 열 뒤집기 적용
            for (let c = 0; c < cols; ++c) {
                if (colFlip & (1 << c)) {
                    flips++;
                    for (let r = 0; r < rows; ++r) {
                        current[r][c] = 1 - current[r][c]; // 뒤집기
                    }
                }
            }

            // 결과 확인
            if (arraysEqual(current, target)) {
                minFlips = Math.min(minFlips, flips);
            }
        }
    }

    // 두 2차원 배열이 동일한지 확인
    function arraysEqual(a, b) {
        for (let r = 0; r < rows; ++r) {
            for (let c = 0; c < cols; ++c) {
                if (a[r][c] !== b[r][c]) return false;
            }
        }
        return true;
    }

    return minFlips === Infinity ? -1 : minFlips;
}