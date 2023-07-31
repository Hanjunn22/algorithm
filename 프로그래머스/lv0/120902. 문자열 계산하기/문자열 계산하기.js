function solution(my_string) {
    // 공백을 기준으로 수식을 분리하여 배열에 저장합니다.
    const expressions = my_string.split(' ');

    let result = parseInt(expressions[0]); // 첫 번째 수식을 결과값으로 초기화합니다.
    let operator = '+';

    // 두 번째 수식부터 순회하며 연산을 수행합니다.
    for (let i = 1; i < expressions.length; i += 2) {
        const currentOperator = expressions[i];
        const operand = parseInt(expressions[i + 1]);

        // 현재 연산자가 '+'인 경우 해당 값을 더해주고, '-'인 경우 해당 값을 빼줍니다.
        if (currentOperator === '+') {
            result += operand;
        } else if (currentOperator === '-') {
            result -= operand;
        }
    }

    return result;
}
