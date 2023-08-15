function solution(sides) {
  // 배열을 오름차순으로 정렬
  sides.sort((a, b) => a - b);

  // 가장 긴 변의 길이를 구합니다.
  const longestSide = sides[2];

  // 나머지 두 변의 길이 합이 가장 긴 변의 길이보다 작을 때까지
  // 나머지 한 변의 길이를 증가시키며 개수를 구합니다.
  let count = 0;
  while (sides[0] + sides[1] <= longestSide) {
    sides[1]++; // 두 번째로 긴 변의 길이를 증가
    count++;
  }

  return count;
}
