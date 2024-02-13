function solution(n) {
    const answer = new Array(n).fill().map((_, i) => new Array(i + 1));
    let count = 1;
    let x = -1;
    let y = 0;
    let direction = 0;

    for (let i = n; i > 0; i -= 3) {
        for (let j = 0; j < i; j++) answer[++x][y] = count++;
        for (let j = 0; j < i - 1; j++) answer[x][++y] = count++;
        for (let j = 0; j < i - 2; j++) answer[--x][--y] = count++;
    }

    return answer.flatMap(e => e);
}
