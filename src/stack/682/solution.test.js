import calPoints from './solution';

describe('calPoints', () => {
  it(
    'should return the sum of the array after all operations',
    () => {
      const ops = ['5', '2', 'C', 'D', '+'];

      const result = calPoints(ops);

      expect(result).toBe(30);
    },
  );
  it(
    'should return the sum of the array after all operations',
    () => {
      const ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+'];

      const result = calPoints(ops);

      expect(result).toBe(27);
    },
  );
});
