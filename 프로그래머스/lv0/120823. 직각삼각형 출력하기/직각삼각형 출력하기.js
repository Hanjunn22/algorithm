function printRightTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    const n = Number(input[0]);
    printRightTriangle(n);
    rl.close(); // 입력 처리가 완료되면 프로그램 종료
});
