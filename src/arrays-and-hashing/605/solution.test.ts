import canPlaceFlowers from './solution';

describe('canPlaceFlowers', () => {
  it('should return whether n flowers could be planted in non-adjacent slots', () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 1;

    const result = canPlaceFlowers(flowerbed, n);

    expect(result).toBeTruthy();
  });

  it('should return whether n flowers could be planted in non-adjacent slots', () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 2;

    const result = canPlaceFlowers(flowerbed, n);

    expect(result).toBeFalsy();
  });

  it('should return whether n flowers could be planted in non-adjacent slots', () => {
    const flowerbed = [0, 0, 0, 0, 1];
    const n = 2;

    const result = canPlaceFlowers(flowerbed, n);

    expect(result).toBeTruthy();
  });

  it('should return whether n flowers could be planted in non-adjacent slots', () => {
    const flowerbed = [0, 0, 1, 0, 0];
    const n = 2;

    const result = canPlaceFlowers(flowerbed, n);

    expect(result).toBeTruthy();
  });
});
