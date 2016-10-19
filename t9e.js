/**
 * t9e (Tic-Tac-Toe) board generator and state checker. Much excite, many codes.
 *
 * This module:
 *
 *  1. Permits the generation of a Tic-Tac-Toe board of arbitrary size.
 *  2. Permits you to check the state of a Tic-Tac-Toe board of arbitrary size.
 *
 * It is performant up to boards of ~2,500 rows/columns on a side. I've tested
 * this code with boards of 5,000 rows/columns on aside. Mad props to you if
 * you actually have a game that large.
 *
 * TODO: Per cell state checking. Given the coordinates of a cell, check the
 * cell based upon its row and column (and intersecting diagonal if applicable).
 */

const t9e = function() {};

/**
 * Default size for new Tic-Tac-Toe boards.
 */

const DEFAULT_BOARD_SIZE = 3;

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
 * @private
 * @param {array} array - Multidimensional array of board cells.
 * @return {array} array - Original array transposed.
 */

function transpose(array) {
    if (!array || !array.length) {
        return [];
    }

    if (!Array.isArray(array[0])) {
        return array.slice().reverse();
    }

    return array[0].map((_, index) => array.map(row => row[index]));
}

/**
 * Return the diagonal elements of a square multidimensional array.
 *
 * @private
 * @param {array} array - Multidimensional array of board cells.
 * @return {array} array - Multidimensional array of diagonal elements.
 */

function diagonals(array) {
    const reversed = array.slice().reverse();

    return [
        array.map((element, index) => array[index][index]),
        array.map((element, index) => reversed[index][index])
    ];
}

/**
 * Test whether an array is a square multidimensional array.
 *
 * @private
 * @param {array} array
 * @return {bool} - Array is multidimensional and square, true/false.
 */

function isSquare(array) {
    const size = array.length;

    return array.every(element => {
        return Array.isArray(element) && element.length === size;
    });
}

/**
 * Generate a square multidimensional array of arbitrary size (a Tic-tac-toe
 * board).
 *
 * @public
 * @param {number} [size=3] - Size of grid (x and y).
 * @param {value=} value- Optional value to pre-populate into fields.
 * @return {array} board - Square multidimensional array.
 */

t9e.prototype.board = function(size, value) {
    if (!parseInt(size) && size !== 0) {
        size = DEFAULT_BOARD_SIZE;
    }

    var board = [...Array(Math.abs(size)).keys()];

    if (value !== undefined) {
        board = board.map(() => value);
    }

    return board.map(() => board);
};

/**
 * Test whether a board has _any_ empty cells.
 *
 * '', null and undefined are falsy in JavaScript, and thus coerce to false.
 * The inner loops sees whether any cell contains a falsy value.
 *
 * @public
 * @param {array} board - Multidimensional array of board cells.
 * @return {bool} - At least one cell of the board is empty, true/false.
 */

t9e.prototype.anyEmpty = function(board) {
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
 * @public
 * @param {string} character - Character to test.
 * @param {array} board - Multidimensional array to test.
 * @param {bool} - All cells in one of the board have the character, true/false.
 */

t9e.prototype.check = function(character, board) {
    if (!board || !Array.isArray(board) || !board.length || !isSquare(board)) {
        return false;
    }

    return [].concat(board, transpose(board), diagonals(board)).some(row => {
        return row.every(cell => cell === character);
    });
};

module.exports = Object.create(t9e.prototype);
