function solution(quiz) {
    let result = [];

    for (let q of quiz) {
        // Split the string into components
        let [x, op, y, _, z] = q.split(" ");
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        z = parseInt(z, 10);

        // Perform the operation based on the operator
        let calc;
        if (op === '+') {
            calc = x + y;
        } else {
            calc = x - y;
        }

        // Check the result and push "O" or "X" to the result array
        if (calc === z) {
            result.push("O");
        } else {
            result.push("X");
        }
    }

    return result;
}