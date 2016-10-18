const boards = {
    win: {
        one: [
            ['O']
        ],
        two: [
            ['O', 'X'],
            ['X', 'X']
        ],
        three: [
            ['O', 'X', 'X'],
            ['O', 'O', 'O'],
            ['X', 'O', 'X']
        ],
        four: [
            ['O', 'X', 'X', 'O'],
            ['X', 'O', 'X', 'O'],
            ['X', 'O', 'X', 'X'],
            ['O', 'X', 'X', 'O'],
        ]
    }
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

function transpose(array) {
    if (!array || !array.length) {
        return [];
    }

    if (!Array.isArray(array[0])) {
        return array.slice().reverse();
    }

    return array[0].map((column, index) => array.map(row => row[index]));
}

/**
 * Return the diagonal elements of a multidimensional array.
 *
 * @param {array} array - Multidimensional array of board cells.
 * @param {array} array - Multidimensional array of diagonal elements.
 */

function diagonals(array) {
    const reversed = array.slice().reverse();

    return [
        array.map((element, index) => array[index][index]),
        array.map((element, index) => reversed[index][index])
    ];
}

/**
 * Test whether a board has _any_ empty cells.
 *
 * '', null and undefined are falsy in JavaScript, and thus coerce to false.
 * The inner loops sees whether any cell contains a falsy value.
 *
 * @param {array} board - Multidimensional array of board cells.
 * @return {bool} - At least one cell of the board is empty, true/false.
 */

function anyEmptyCells(board) {
    return board.some(row => row.some(cell => !cell));
}

/**
 * Test whether all cells of the supplied row contain the given character.
 *
 * @param {array} row - Row to test.
 * @param {string} character - Character to test.
 * @param {bool} - Row cells equal character, true/false.
 */

function cellsContainChar(character, row) {
    return row.every(cell => cell === character);
}

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

function rowContainsChar(character, board) {
    return [].concat(board, transpose(board), diagonals(board)).some(row => {
        return cellsContainChar(character, row);
    });
}
