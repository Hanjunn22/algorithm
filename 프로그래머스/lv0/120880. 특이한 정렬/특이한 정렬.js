function solution(numlist, n) {
  // 거리를 기준으로 정렬하는 함수
  function compareDistance(a, b) {
    const distanceA = Math.abs(a - n);
    const distanceB = Math.abs(b - n);

    if (distanceA === distanceB) {
      // 거리가 같을 경우 더 큰 수가 앞에 오도록 정렬
      return b - a;
    } else {
      return distanceA - distanceB;
    }
  }

  // numlist를 compareDistance 함수를 사용하여 정렬
  numlist.sort(compareDistance);

  return numlist;
}