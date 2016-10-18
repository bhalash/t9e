const t9e = function(character, board) {
    return this.rowContainsChar(character, board);
};

/**
 * Generate a square multidimensional array of arbitrary size.
 *
 * @param {number} [size=3] - Size of grid (x and y).
 * @param {*=} value - Value to prepopulate into fields. Defaults to array keys.
 * @return {array} array - Square multidimensional array.
 */

t9e.prototype.grid = function(size, value) {
    if (size === undefined) {
        size = 3;
    }

    let array = [...Array(size).keys()];

    if (value !== undefined) {
        array = array.map(() => value);
    }

    return array.map(() => array);
};

/**
 * Transpose an array.
 *
 * This is used to assist in evaluation of win conditions: Rather than change the
 * test to fit board state, it's easier to fit the board to a single win
 * condition (by turning the board sideways).
 *
 *  1. If array is empty or falsy, return an array.
 *  2. If array[0] is not an array itself, return the parent reversed.
 *
 * @param {array} array - Multidimensional array of board cells.
 * @return {array} array - Original array transposed.
 */

t9e.prototype.transpose = function(array) {
    if (!array || !array.length) {
        return [];
    }

    if (!Array.isArray(array[0])) {
        return array.slice().reverse();
    }

    return array[0].map((_, index) => array.map(row => row[index]));
};

/**
 * Return the diagonal elements of a square multidimensional array.
 *
 * @param {array} array - Multidimensional array of board cells.
 * @param {array} array - Multidimensional array of diagonal elements.
 */

t9e.prototype.diagonals = function(array) {
    const reversed = array.slice().reverse();

    return [
        array.map((element, index) => array[index][index]),
        array.map((element, index) => reversed[index][index])
    ];
};

/**
 * Test whether all cells of the supplied row contain the given character.
 *
 * @param {array} row - Row to test.
 * @param {string} character - Character to test.
 * @param {bool} - Row cells equal character, true/false.
 */

t9e.prototype.cellsContainChar = function(character, row) {
    return row.every(cell => cell === character);
};

/**
 * Test whether a board has _any_ empty cells.
 *
 * '', null and undefined are falsy in JavaScript, and thus coerce to false.
 * The inner loops sees whether any cell contains a falsy value.
 *
 * @param {array} board - Multidimensional array of board cells.
 * @return {bool} - At least one cell of the board is empty, true/false.
 */

t9e.prototype.anyEmptyCells = function(board) {
    return board.some(row => row.some(cell => !cell));
};

/**
 * Test whether a row of the passed game board contains the supplied character,
 * while the board is in the following configurations:
 *
 *  1. Board rows.
 *  2. Board columns (transposed to rows).
 *  3. Board diagonals (converted to rows).
 *
 * To explain: Rather than changing the test pattern to fit every board
 * configuration, it is easier to change the configuration to fit a single test
 * pattern:
 *
 * Does any row of the board contain _only_ the supplied character?
 *
 * @param {string} character - Character to test.
 * @param {array} board - Multidimensional array to test.
 * @param {bool} - A row of the board all contain the given character, true/false.
 */

t9e.prototype.rowContainsChar = function(character, board) {
    return [].concat(board, this.transpose(board), this.diagonals(board)).some(row => {
        return this.cellsContainChar(character, row);
    });
};

module.exports = Object.create(t9e.prototype);
