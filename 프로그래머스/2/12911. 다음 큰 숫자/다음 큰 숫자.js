function solution(n) {
  const countBits = (number) => {
    return number.toString(2).split('0').join('').length;
  };
  
  const bitsInN = countBits(n);
  let nextNumber = n + 1;
  
  while (countBits(nextNumber) !== bitsInN) {
    nextNumber++;
  }
  
  return nextNumber;
}