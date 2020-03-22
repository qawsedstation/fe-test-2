import NumberItemView from '../number-item-view';
import NumberHelper from '../number-helper';

class App {
  fromNumber

  toNumber

  /**
   * Initialazation of the values in order to be able to configure our App from outside
   * @param {Number} fromNumber
   * @param {Number} toNumber
   */
  constructor(fromNumber = 1, toNumber = 144) {
    this.fromNumber = fromNumber;
    this.toNumber = toNumber;
  }

  /**
   * OnInit is going to get called when the project is boostraped
   */
  onInit() {
    for (let number = this.fromNumber; number <= this.toNumber; number += 1) {
      NumberItemView.render(number);
    }

    NumberItemView.onClickAtNumberItem(this.onClickAtNumberItem);
  }

  /**
   * **********************************************************************************************
   * ****************************IMPLEMENATION PART************************************************
   * ** Is a good practice to use this divider to differentiate the interface from implementation
   * functions so developers can find quickly what they are looking.*******************************
   *
   * As they spend a lot of their time on trying to find code than writing. This is part of LIFT
   * Guidelines comming from John Papa a well known javascript Mentor *****************************
   */

  /**
   * When the user clicks a Number Item
   * @param {Number} clickedNumber  This is the number we clicked
   * @param {Boolean} isHighlighted This indicates the status for the clicked number
   */
  onClickAtNumberItem = (clickedNumber, isHighlighted) => {
    for (let number = this.fromNumber; number <= this.toNumber; number += 1) {
      if (isHighlighted) {
        if (NumberHelper.isNumberMultiplier(number, clickedNumber)) {
          NumberItemView.removeHighlightFromItem(number);
        }
      } else {
        // Resets the state for all the items
        NumberItemView.removeHighlightFromItem(number);

        if (NumberHelper.isNumberMultiplier(number, clickedNumber)) {
          NumberItemView.highlightItem(number);
        }
      }
    }
  }
}

export default App;
