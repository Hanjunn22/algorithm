function solution(number, k) {
    const stack = [];
    let count = 0;

    for (let num of number) {
        // 스택이 비어있지 않고, k개의 숫자를 아직 제거하지 않았으며,
        // 스택의 마지막 숫자가 현재 숫자보다 작은 경우,
        // 스택에서 숫자를 제거합니다.
        while (stack.length > 0 && count < k && stack[stack.length - 1] < num) {
            stack.pop();
            count++;
        }

        stack.push(num);
    }

    // k개의 숫자를 모두 제거하지 못한 경우, 남은 개수만큼 뒤에서 제거합니다.
    while (count < k) {
        stack.pop();
        count++;
    }

    return stack.join('');
}