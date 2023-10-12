function solution(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0)); // n x n 배열 생성
  
  let num = 1; // 시작 숫자
  let row = 0; // 행의 시작 인덱스
  let col = 0; // 열의 시작 인덱스

  for (let i = n; i > 0; i -= 2) {
    // 오른쪽으로 이동
    for (let j = 0; j < i; j++) {
      result[row][col] = num++;
      col++;
    }
    col--;
    row++;
    
    // 아래로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      row++;
    }
    row--;
    col--;
    
    // 왼쪽으로 이동
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      col--;
    }
    col++;
    row--;
    
    // 위로 이동
    for (let j = 0; j < i - 2; j++) {
      result[row][col] = num++;
      row--;
    }
    row++;
    col++;
  }
  
  return result;
}