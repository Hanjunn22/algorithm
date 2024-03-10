function collatzSequence(k) {
  let sequence = [k];
  while (k > 1) {
    k = k % 2 === 0 ? k / 2 : k * 3 + 1;
    sequence.push(k);
  }
  return sequence;
}

function solution(k, ranges) {
  const sequence = collatzSequence(k);
  let integrals = [];

  ranges.forEach(range => {
    let [a, b] = range;
    b = sequence.length - 1 - Math.abs(b);
    
    if (a > b) {
      integrals.push(-1);
      return;
    }

    let integral = 0;
    for (let i = a; i < b; i++) {
      let height = (sequence[i] + sequence[i + 1]) / 2;
      integral += height;
    }
    integrals.push(integral);
  });

  return integrals;
}