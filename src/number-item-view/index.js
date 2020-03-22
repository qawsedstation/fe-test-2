/**
 *  This Class is the equivalent of the View when we talk about an MVC pattern
 */
export default class NumberItemView {
  static CLASS_NUMBERS= 'numbers';

  static CLASS_NUMBERS_ITEM= 'numbers__item';

  static CLASS_NUMBERS_ITEM_HIGHLIGHT = 'numbers__item--highlighted';

  static CLASS_NUMBERS_ITEM_PRIMARY = 'numbers__item--primary';

  /**
   * Adds highlight to an item
   * @param {Number} id
   */
  static highlightItem(id) {
    document.getElementById(id).classList.remove(NumberItemView.CLASS_NUMBERS_ITEM_PRIMARY);
    document.getElementById(id).classList.add(NumberItemView.CLASS_NUMBERS_ITEM_HIGHLIGHT);
  }

  /**
   * Removes the highlight from an item
   * @param {Number} id
   */
  static removeHighlightFromItem(id) {
    document.getElementById(id).classList.remove(NumberItemView.CLASS_NUMBERS_ITEM_HIGHLIGHT);
    document.getElementById(id).classList.add(NumberItemView.CLASS_NUMBERS_ITEM_PRIMARY);
  }

  /**
   * It renders a number on the screen
   * @param {String} selector
   * @param {Number} number
   */
  static render(number) {
    document.getElementById(NumberItemView.CLASS_NUMBERS).innerHTML += `<div 
              id="${number}"
              class="numbers__item ${NumberItemView.CLASS_NUMBERS_ITEM_PRIMARY}">${number}</div>`;
  }

  /**
   * When the user click at the Number Item
   * @param {Function} cb
   */
  static onClickAtNumberItem(cb) {
    const allNumbersElements = document.getElementsByClassName(
      NumberItemView.CLASS_NUMBERS_ITEM,
    );

    Array.from(allNumbersElements).forEach((element) => {
      element.addEventListener('click', (event) => {
        const isHighlighted = event.target.classList.contains(
          NumberItemView.CLASS_NUMBERS_ITEM_HIGHLIGHT,
        );
        cb(event.target.id, isHighlighted);
      });
    });
  }
}
