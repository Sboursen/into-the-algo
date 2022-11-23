export default function isValidSudoku(board: string[][]): boolean {
  const digits: Set<string> = new Set();
  const len = board.length;

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (board[i][j] === '.') continue;
      if (digits.has(board[i][j])) {
        return false;
      } else {
        digits.add(board[i][j]);
      }
    }
    digits.clear();
  }

  for (let j = 0; j < len; j += 1) {
    for (let i = 0; i < len; i += 1) {
      if (board[i][j] === '.') continue;
      if (digits.has(board[i][j])) {
        return false;
      } else {
        digits.add(board[i][j]);
      }
    }
    digits.clear();
  }

  let isValid = true;
  for (let i = 0; i < len; i += 3) {
    for (let j = 0; j < len; j += 3) {
      board
        .slice(i, i + 3)
        .map((arr) => arr.slice(j, j + 3))
        .flat()
        .forEach((char) => {
          if (char === '.') return;
          if (digits.has(char)) {
            isValid = false;
          } else {
            digits.add(char);
          }
        });
      digits.clear();
    }
  }

  return isValid;
}
