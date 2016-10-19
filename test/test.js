const tape = require('tape');
const t9e = require('../');

const chars = { win: 'X', lose: 'O' };

const boards = {
    wins: {
        row: [
            ['O', 'X', 'O'],
            ['X', 'X', 'X'],
            ['X', 'O', 'O']
        ],
        column: [
            ['X', 'O', 'O'],
            ['X', 'O', 'X'],
            ['X', 'X', 'O']
        ],
        diagonal: {
            forward: [
                ['X', 'O', 'O'],
                ['O', 'X', 'O'],
                ['X', 'O', 'X']
            ],
            backward: [
                ['O', 'O', 'X'],
                ['O', 'X', 'O'],
                ['X', 'X', 'O']
            ]
        }
    },
    falsy: [
        ['X', 'O', 'X'],
        ['O', 'O', null],
        ['X', 'X', 'O']
    ],
    empty: t9e.board(5, null),
    play: t9e.board(3)
};

/**
 * board() Method
 * =============================================================================
 */

tape('board()', assert => {
    assert.plan(11);

    assert.equal(
        typeof t9e.board,
        'function',
        'Should be a function.'
    );

    assert.deepEqual(
        t9e.board(),
        [[0, 1, 2], [0, 1, 2], [0, 1, 2]],
        'Should produce a square array of size 3 given no parameters.'
    );

    assert.deepEqual(
        t9e.board(undefined),
        [[0, 1, 2], [0, 1, 2], [0, 1, 2]],
        'Should produce a square array of size 3 given a falsy size.'
    );

    assert.deepEqual(
        t9e.board('ponies'),
        [[0, 1, 2], [0, 1, 2], [0, 1, 2]],
        'Should produce a square array of size 3 given an invalid size.'
    );

    assert.deepEqual(
        t9e.board(0),
        [],
        'Should produce an empty array given size 0.'
    );

    assert.deepEqual(
        [[0]],
        t9e.board(1),
        'Should produce a square array of size 1.'
    );

    assert.deepEqual(
        t9e.board(2),
        [[0, 1], [0, 1]],
        'Should produce a square array of size 2.'
    );

    assert.deepEqual(
        t9e.board(3),
        [[0, 1, 2], [0, 1, 2], [0, 1, 2]],
        'Should produce a square array of size 3'
    );

    assert.deepEqual(
        t9e.board(undefined, '-'),
        [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
        'Should produce a square array of size 3 prepopulated with dashes.'
    );

    assert.deepEqual(
        t9e.board(1, '-'),
        [['-']],
        'Should produce a square array of size 1 prepopulated with dashes.'
    );

    assert.deepEqual(
        t9e.board(1, '-'),
        [['-']],
        'Should produce a square array of size 2 prepopulated with dashes.'
    );
});

/**
 * test() Method
 * =============================================================================
 */

tape('check()', assert => {
    assert.plan(9);

    assert.equal(
        typeof t9e.check,
        'function',
        'Should be a function.'
    );

    assert.equal(
        true,
        t9e.check(chars.win, boards.wins.row),
        'Should detect win conditions on a row.'
    );

    assert.equal(
        true,
        t9e.check(chars.win, boards.wins.column),
        'Should detect win conditions on a column.'
    );

    assert.equal(
        true,
        t9e.check(chars.win, boards.wins.diagonal.forward),
        'Should detect win conditions on a forward diagonal.'
    );

    assert.equal(
        true,
        t9e.check(chars.win, boards.wins.diagonal.backward),
        'Should detect win conditions on a backward diagonal.'
    );

    assert.equal(
        false,
        t9e.check(chars.win, boards.wins.falsy),
        'Should not detect win conditions on an unfilled board.'
    );

    assert.equal(
        false,
        t9e.check(chars.win, boards.wins.falsy),
        'Should not detect win conditions on an unfilled board.'
    );

    assert.equal(
        false,
        t9e.check(chars.win, []),
        'Should not detect win conditions on an empty array.'
    );

    assert.equal(
        false,
        t9e.check(chars.win, null),
        'Should not detect win conditions on an invalid value.'
    );
});

/**
 * anyEmpty() Method
 * =============================================================================
 */

tape('check()', assert => {
    assert.plan(4);

    assert.equal(
        typeof t9e.anyEmpty,
        'function',
        'Should be a function.'
    );

    assert.equal(
        true,
        t9e.anyEmpty(boards.falsy),
        'Should detect empty cells on an unfilled board.'
    );

    assert.equal(
        true,
        t9e.anyEmpty(boards.empty),
        'Should detect empty cells on an empty board.'
    );

    assert.equal(
        false,
        t9e.anyEmpty(boards.wins.row),
        'Should detect no empty cells on a filled board.'
    );
});
