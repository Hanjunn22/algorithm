function solution(n, works) {
  // 작업량이 모두 0인 경우, 야근 피로도는 0입니다.
  if (works.reduce((acc, cur) => acc + cur, 0) <= n) return 0;

  // 내림차순으로 정렬합니다.
  works.sort((a, b) => b - a);

  while (n > 0) {
    // 가장 큰 작업량을 1 감소시킵니다.
    works[0] -= 1;
    n -= 1;

    // 감소된 작업량이 다음 작업량보다 작아졌다면 위치를 조정합니다.
    let i = 0;
    while (i < works.length - 1 && works[i] < works[i + 1]) {
      // 스왑
      [works[i], works[i + 1]] = [works[i + 1], works[i]];
      i += 1;
    }
  }

  // 각 작업량의 제곱의 합을 계산합니다.
  return works.reduce((acc, cur) => acc + cur * cur, 0);
}
