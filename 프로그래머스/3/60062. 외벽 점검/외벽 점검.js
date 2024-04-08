function permute(arr) {
  if (arr.length === 0) return [[]];
  const firstEl = arr[0];
  const rest = permute(arr.slice(1));

  const fullPermutations = [];

  rest.forEach((aPerm) => {
    for (let i = 0; i <= aPerm.length; i++) {
      const start = aPerm.slice(0, i);
      const end = aPerm.slice(i);
      fullPermutations.push([...start, firstEl, ...end]);
    }
  });

  return fullPermutations;
}

function solution(n, weak, dist) {
  const length = weak.length;
  const weakPoints = weak.concat(weak.map(p => p + n));
  let minFriends = dist.length + 1;

  for (let start = 0; start < length; start++) {
    permute(dist).forEach(p => {
      let count = 1;
      let position = weakPoints[start] + p[count - 1];
      for (let index = start; index < start + length; index++) {
        if (position < weakPoints[index]) {
          count += 1;
          if (count > dist.length) break;
          position = weakPoints[index] + p[count - 1];
        }
      }
      minFriends = Math.min(minFriends, count);
    });
  }

  return minFriends > dist.length ? -1 : minFriends;
}
