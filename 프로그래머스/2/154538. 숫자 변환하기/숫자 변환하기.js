function solution(x, y, n) {
    if (x === y) return 0;
    let queue = [[y, 0]];
    let visited = new Set([y]);

    while (queue.length > 0) {
        let [current, operations] = queue.shift();

        if (current === x) {
            return operations;
        }

        let possibilities = [];
        if (current % 3 === 0) possibilities.push(current / 3);
        if (current % 2 === 0) possibilities.push(current / 2);
        if ((current - n) >= x) possibilities.push(current - n);

        for (let i = 0; i < possibilities.length; i++) {
            if (!visited.has(possibilities[i])) {
                visited.add(possibilities[i]);
                queue.push([possibilities[i], operations + 1]);
            }
        }
    }

    return -1;
}
