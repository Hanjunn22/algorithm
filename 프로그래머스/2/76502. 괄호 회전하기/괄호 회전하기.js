function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of s) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (isValid(s)) count++;
    s = s.substring(1) + s[0];
  }

  return count;
}