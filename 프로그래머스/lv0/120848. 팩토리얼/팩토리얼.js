function solution(n) {
  let i = 1;
  let factorial = 1;
  
  while (factorial <= n) {
    factorial *= i;
    i++;
  }
  
  // 위의 반복문을 빠져나오면서 조건을 만족하는 가장 큰 i는 i-1이 됩니다.
  return i - 2;
}