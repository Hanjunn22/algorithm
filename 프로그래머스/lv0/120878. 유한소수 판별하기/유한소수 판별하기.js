// 두 정수의 최대공약수를 구하는 함수
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(a, b) {
  // a와 b의 최대공약수를 구합니다.
  const greatestCommonDivisor = gcd(a, b);

  // 최대공약수로 a와 b를 약분합니다.
  a /= greatestCommonDivisor;
  b /= greatestCommonDivisor;

  // 분모를 소인수분해하여 2와 5만 있는지 확인합니다.
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }

  // 소인수분해 후 b가 1이면 유한소수, 아니면 무한소수입니다.
  return b === 1 ? 1 : 2;
}