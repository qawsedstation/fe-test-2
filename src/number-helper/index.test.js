import NumberHelper from '.';

describe('Number Helper', () => {
  describe('Positive scenarios', () => {
    test('it should return true as the 2 is the multiplier of 2', () => {
      expect(NumberHelper.isNumberMultiplier(2, 2)).toBeTruthy();
    });

    test('it should return true as the 4 is the multiplier of 2', () => {
      expect(NumberHelper.isNumberMultiplier(4, 2)).toBeTruthy();
    });

    test('it should return true as the 1 is the multiplier of 1', () => {
      expect(NumberHelper.isNumberMultiplier(1, 1)).toBeTruthy();
    });

    test('it should return true as the 16 is the multiplier of 8', () => {
      expect(NumberHelper.isNumberMultiplier(16, 8)).toBeTruthy();
    });
  });

  describe('Negative scenarios', () => {
    test('it should return false as the 3 is not the multiplier of 2', () => {
      expect(NumberHelper.isNumberMultiplier(3, 2)).toBeFalsy();
    });

    test('it should return false as the 5 is not the multiplier of 2', () => {
      expect(NumberHelper.isNumberMultiplier(5, 2)).toBeFalsy();
    });

    test('it should return false as the 5 is not the multiplier of 9', () => {
      expect(NumberHelper.isNumberMultiplier(5, 9)).toBeFalsy();
    });

    test('it should return false as the 17 is not the multiplier of 8', () => {
      expect(NumberHelper.isNumberMultiplier(17, 8)).toBeFalsy();
    });
  });
});
