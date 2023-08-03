function solution(keyinput, board) {
  const [maxX, maxY] = [(board[0] - 1) / 2, (board[1] - 1) / 2];
  let [x, y] = [0, 0];

  for (const direction of keyinput) {
    if (direction === "up" && y < maxY) {
      y++;
    } else if (direction === "down" && y > -maxY) {
      y--;
    } else if (direction === "left" && x > -maxX) {
      x--;
    } else if (direction === "right" && x < maxX) {
      x++;
    }
  }

  return [x, y];
}
