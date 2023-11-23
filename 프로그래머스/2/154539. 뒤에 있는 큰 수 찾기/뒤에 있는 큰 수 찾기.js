function solution(numbers) {
  let stack = [];
  let result = new Array(numbers.length).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      let index = stack.pop();
      result[index] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}
