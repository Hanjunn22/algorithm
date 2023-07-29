function solution(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    const num = array[i].toString(); // 정수를 문자열로 변환하여 7의 개수를 세기 쉽게 합니다.
    for (let j = 0; j < num.length; j++) {
      if (num[j] === '7') {
        count++;
      }
    }
  }

  return count;
}
