function solution(numbers) {
  const numMap = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
  };

  // 숫자 문자열을 해당하는 숫자로 치환하여 반환
  Object.keys(numMap).forEach(key => {
    numbers = numbers.replace(new RegExp(key, "g"), numMap[key]);
  });

  return parseInt(numbers);
}