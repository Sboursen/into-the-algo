import search2DMatrix from './solution';

describe('search2DMatrix', () => {
  it(
    'should return true if the target exists in the matrix',
    () => {
      const matrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]];
      const target = 2;
      const expected = true;

      const result = search2DMatrix(matrix, target);

      expect(result).toEqual(expected);
    },
  );

  it(
    'should return true if the target exists in the matrix',
    () => {
      const matrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]];
      const target = 30;
      const expected = true;

      const result = search2DMatrix(matrix, target);

      expect(result).toEqual(expected);
    },
  );

  it(
    'should return false if the target exists in the matrix',
    () => {
      const matrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]];
      const target = 100;
      const expected = false;

      const result = search2DMatrix(matrix, target);

      expect(result).toEqual(expected);
    },
  );

  it(
    'should return false if the target exists in the matrix',
    () => {
      const matrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]];
      const target = 15;
      const expected = false;

      const result = search2DMatrix(matrix, target);

      expect(result).toEqual(expected);
    },
  );
});
