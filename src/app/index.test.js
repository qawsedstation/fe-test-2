import App from '.';
import NumberItemView from '../number-item-view';

describe('App', () => {
  const NUMBER_TWO = 1;
  const NUMBER_FOUR = 3;
  const NUMBER_EIGHT = 7;
  const NUMBER_SIXTEEN = 15;
  const NUMBER_TWENTY_FOUR = 23;

  describe('Render', () => {
    let mockNumbersDiv;

    describe('Constructor ', () => {
      test('it should initialize the values of the App fromNumber and toNumber', () => {
        const app = new App(50, 500);

        expect(app.fromNumber).toBe(50);
        expect(app.toNumber).toBe(500);
      });

      test('it should initialize the default values of the App fromNumber and toNumber when nothing is provided', () => {
        const app = new App();

        expect(app.fromNumber).toBe(1);
        expect(app.toNumber).toBe(144);
      });
    });

    describe('Constructor ', () => {
      beforeEach(() => {
        // Mock the html container
        mockNumbersDiv = document.createElement('div');
        mockNumbersDiv.setAttribute('id', 'numbers');
        mockNumbersDiv.setAttribute('class', 'numbers');
        document.body.appendChild(mockNumbersDiv);
      });

      afterEach(() => {
        document.body.innerHTML = null;
      });

      test('it should create boxes with numbers from 1 to 141 ', () => {
        const app = new App(1, 141);
        app.onInit();

        expect(
          mockNumbersDiv.getElementsByClassName(
            NumberItemView.CLASS_NUMBERS_ITEM,
          )[0].innerHTML,
        ).toBe('1');

        expect(
          mockNumbersDiv.getElementsByClassName(
            NumberItemView.CLASS_NUMBERS_ITEM,
          )[140].innerHTML,
        ).toBe('141');

        expect(
          mockNumbersDiv.getElementsByClassName(
            NumberItemView.CLASS_NUMBERS_ITEM,
          ),
        ).toHaveLength(141);
      });

      test('it should highlight all the boxes which are a multiple of that number when the child clicks a box', () => {
        const app = new App(1, 141);
        app.onInit();

        // Simulate click on number
        mockNumbersDiv
          .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_TWO]
          .click();

        // Check that the number clicked is highlighted
        expect(
          mockNumbersDiv
            .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_TWO]
            .classList.contains(
              NumberItemView.CLASS_NUMBERS_ITEM_HIGHLIGHT,
            ),
        ).toBeTruthy();

        // Check that the mulpipliers are highlighted
        expect(
          mockNumbersDiv
            .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_FOUR]
            .classList.contains(
              NumberItemView.CLASS_NUMBERS_ITEM_HIGHLIGHT,
            ),
        ).toBeTruthy();

        expect(
          mockNumbersDiv
            .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_EIGHT]
            .classList.contains(
              NumberItemView.CLASS_NUMBERS_ITEM_HIGHLIGHT,
            ),
        ).toBeTruthy();
      });

      test('it should remove the highlight from the boxes that are multiples of the number if a child clicks a box that is previously highlighted', () => {
        // SET UP
        const app = new App(1, 141);
        app.onInit();
        mockNumbersDiv
          .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_TWO]
          .click();

        mockNumbersDiv
          .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_EIGHT]
          .click();

        // Check that the number clicked is not highlighted
        expect(
          mockNumbersDiv
            .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_EIGHT]
            .classList.contains(NumberItemView.CLASS_NUMBERS_ITEM),
        ).toBeTruthy();

        // Check that the new mulpipliers are not highlighted
        expect(
          mockNumbersDiv
            .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_SIXTEEN]
            .classList.contains(
              NumberItemView.CLASS_NUMBERS_ITEM_PRIMARY,
            ),
        ).toBeTruthy();

        expect(
          mockNumbersDiv
            .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_TWENTY_FOUR]
            .classList.contains(
              NumberItemView.CLASS_NUMBERS_ITEM_PRIMARY,
            ),
        ).toBeTruthy();

        // Check that old mulpipliers are highlighted
        expect(
          mockNumbersDiv
            .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_FOUR]
            .classList.contains(
              NumberItemView.CLASS_NUMBERS_ITEM_HIGHLIGHT,
            ),
        ).toBeTruthy();
      });
    });
  });
});
