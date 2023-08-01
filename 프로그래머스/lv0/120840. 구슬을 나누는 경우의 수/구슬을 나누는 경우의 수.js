function combination(n, m) {
  if (n === m || m === 0) {
    return 1;
  }
  return combination(n - 1, m - 1) + combination(n - 1, m);
}

function solution(balls, share) {
  return combination(balls, share);
}