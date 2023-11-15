function solution(k, tangerine) {
  const sizeCounts = {};

  // 귤의 크기별로 개수를 센다.
  for (let size of tangerine) {
    if (!sizeCounts[size]) {
      sizeCounts[size] = 0;
    }
    sizeCounts[size]++;
  }

  // 내림차순으로 크기별 개수 정렬
  const sortedCounts = Object.values(sizeCounts).sort((a, b) => b - a);

  // k개를 채울 때까지 서로 다른 종류의 귤 세기
  let selected = 0;
  let typeCount = 0;
  for (let count of sortedCounts) {
    selected += count;
    typeCount++;
    if (selected >= k) {
      break;
    }
  }

  return typeCount;
}