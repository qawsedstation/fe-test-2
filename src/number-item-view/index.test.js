import NumberItemView from '.';

describe('Number Item View', () => {
  const NUMBER_ONE = 0;

  describe('Render', () => {
    let mockNumbersDiv;

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

    test('it should render the number 1 when we call the render function with 1 as the parameter', () => {
      NumberItemView.render(1);

      expect(
        mockNumbersDiv.getElementsByClassName(
          NumberItemView.CLASS_NUMBERS_ITEM,
        )[NUMBER_ONE].innerHTML,
      ).toBe('1');
    });

    test('it should render the number 144 when we call the render function with 144 as the parameter', () => {
      NumberItemView.render(144);

      expect(
        mockNumbersDiv.getElementsByClassName(
          NumberItemView.CLASS_NUMBERS_ITEM,
        )[NUMBER_ONE].innerHTML,
      ).toBe('144');
    });

    test('it should highlight a number', () => {
      // SETUP the Data
      NumberItemView.render(1);

      // Highlight an item
      NumberItemView.highlightItem(1);

      // Check that the item is highlighted
      expect(
        mockNumbersDiv
          .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_ONE]
          .classList.contains(
            NumberItemView.CLASS_NUMBERS_ITEM_HIGHLIGHT,
          ),
      ).toBeTruthy();
    });

    test('it should remove the highlight from a number item', () => {
      // SETUP the Data
      NumberItemView.render(1);
      NumberItemView.highlightItem(1);

      // Remove Highlight from an item
      NumberItemView.removeHighlightFromItem(1);

      // Check that the item is not highlighted any more
      expect(
        mockNumbersDiv
          .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_ONE]
          .classList.contains(
            NumberItemView.CLASS_NUMBERS_ITEM_PRIMARY,
          ),
      ).toBeTruthy();

      expect(
        mockNumbersDiv
          .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_ONE]
          .classList.contains(
            NumberItemView.CLASS_NUMBERS_ITEM_HIGHLIGHT,
          ),
      ).toBeFalsy();
    });

    test('it should trigger the callback after the user clicks the item number', (cb) => {
      // SETUP the Data
      NumberItemView.render(1);

      // Check that the item is clicked
      NumberItemView.onClickAtNumberItem((clickedNumber, isHighlighted) => {
        expect(clickedNumber).toBe('1');
        expect(isHighlighted).toBeFalsy();

        cb();
      });

      // Simulate click on number
      mockNumbersDiv
        .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_ONE]
        .click();
    });

    test('it should trigger the callback after the user clicks the item number and the number should be highlighted', (cb) => {
      // SETUP the Data
      NumberItemView.render(1);
      NumberItemView.highlightItem(1);

      // Check that the item is clicked
      NumberItemView.onClickAtNumberItem((clickedNumber, isHighlighted) => {
        expect(clickedNumber).toBe('1');
        expect(isHighlighted).toBeTruthy();

        cb();
      });

      // Simulate click on number
      mockNumbersDiv
        .getElementsByClassName(NumberItemView.CLASS_NUMBERS_ITEM)[NUMBER_ONE]
        .click();
    });
  });
});
