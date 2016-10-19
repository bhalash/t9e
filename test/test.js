const tape = require('tape');
const t9e = require('../');

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
    assert.plan(1);

    assert.equal(
        typeof t9e.check,
        'function',
        'Should be a function.'
    );
});

/**
 * anyEmpty() Method
 * =============================================================================
 */


tape('check()', assert => {
    assert.plan(1);

    assert.equal(
        typeof t9e.anyEmpty,
        'function',
        'Should be a function.'
    );
});
