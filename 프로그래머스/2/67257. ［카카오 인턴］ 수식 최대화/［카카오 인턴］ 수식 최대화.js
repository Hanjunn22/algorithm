function solution(expression) {
    const operations = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '+', '-'],
        ['*', '-', '+']
    ];
    let answer = 0;

    operations.forEach(op => {
        const numbers = expression.split(/[^0-9]/).map(Number); // 숫자 분리
        const ops = expression.replace(/[0-9]/g, '').split(''); // 연산자 분리
        for (let i = 0; i < op.length; i++) {
            while (ops.includes(op[i])) {
                const index = ops.indexOf(op[i]);
                numbers.splice(index, 2, calc(numbers[index], numbers[index + 1], op[i]));
                ops.splice(index, 1);
            }
        }
        answer = Math.max(answer, Math.abs(numbers[0]));
    });

    return answer;
}

function calc(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
}
