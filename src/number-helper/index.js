export default class NumberHelper {
  /**
   * Checks if the given number is multiplier of another number
   * @param {Number} number The number we try to check if is multiply
   * @param {Number} multiplierOf The number we try to check against
   */
  static isNumberMultiplier(number, multiplierOf) {
    return number % multiplierOf === 0;
  }
}
