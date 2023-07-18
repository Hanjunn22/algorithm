function solution(numer1, denom1, numer2, denom2) {
  // 분수를 더한 결과의 분자 계산
  const resultNumer = numer1 * denom2 + numer2 * denom1;
  // 분수를 더한 결과의 분모 계산
  const resultDenom = denom1 * denom2;
  
  // 분자와 분모의 최대공약수를 구하는 함수
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  
  // 분자와 분모의 최대공약수로 기약 분수로 만들기
  const greatestCommonDivisor = gcd(resultNumer, resultDenom);
  const simplifiedNumer = resultNumer / greatestCommonDivisor;
  const simplifiedDenom = resultDenom / greatestCommonDivisor;

  return [simplifiedNumer, simplifiedDenom];
}