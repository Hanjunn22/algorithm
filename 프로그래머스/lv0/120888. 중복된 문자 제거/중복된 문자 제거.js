function solution(my_string) {
  // 문자열을 문자 단위로 분리한 배열 생성
  const charArray = my_string.split('');

  // 중복된 문자를 제거하기 위해 Set을 사용
  const uniqueCharsSet = new Set();

  // 중복된 문자를 제거한 순서대로 저장될 배열
  const uniqueCharsArray = [];

  // 문자 배열을 순회하면서 중복된 문자 제거
  for (const char of charArray) {
    if (!uniqueCharsSet.has(char)) {
      uniqueCharsSet.add(char);
      uniqueCharsArray.push(char);
    }
  }

  // 배열을 다시 문자열로 변환하여 반환
  return uniqueCharsArray.join('');
}