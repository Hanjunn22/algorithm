function solution(brown, yellow) {
    for (let yellowHeight = 1; yellowHeight <= Math.sqrt(yellow); yellowHeight++) {
        if (yellow % yellowHeight === 0) {
            let yellowWidth = yellow / yellowHeight;

            if (2 * yellowWidth + 2 * yellowHeight + 4 === brown) {
                return [yellowWidth + 2, yellowHeight + 2];
            }
        }
    }
}
