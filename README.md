[![Build Status](https://travis-ci.org/bhalash/t9e.svg?branch=master)](https://travis-ci.org/bhalash/t9e) [![devDependencies Status](https://david-dm.org/bhalash/t9e/dev-status.png)](https://david-dm.org/bhalash/t9e?type=dev)

# t9e
t9e (t**ic-tac-to**e) is a [Tic-Tac-Toe][1] board generator and solution checker.

Boards of arbitrary size are supported. Boards should be kept below ~1000 rows and columns on a size for code to remain performant.

Currently three operations are supported:

1. Generate a Tic-Tac-Toe board of arbitrary size.
2. Test the win state of a Tic-Tac-Toe board of arbitrary size.
3. Test whether any cell of a Tic-Tac-Toe board is empty, so play may continue.

## Why?

This project began in response to a [Hacktoberfest help request][2] on [tictactoe-server][3]-refactor the solution checker to use ES6 syntax. My solution to the problem interested me enough to spin off the code.

## But Senpai..._Why?_

Because.

## Installation

    npm install t9e

## Testing

    npm run test

## Usage

To generate a board (a square multidimensional grid) of a given size:

```javascript
const t9e = require('t9e');
t9e.board(3, '-'); // [ ['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-'] ]
```

To validate the state of a given board:

```javascript
const t9e = require('t9e');

const board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
];

t9e.check('X', board); // true
t9e.check('O', board); // false
```

To test whether _any_ cell of the board is empty (falsy):

```javascript
const t9e = require('t9e');

const board = [
    ['X', 'O', 'X'],
    ['O', 'X', null],
    ['O', 'O', 'X']
];

t9e.anyEmpty(board); // true
```

## TODO

 * Per cell state checking. Given the coordinates of a cell, check the cell based upon its row and column (and intersecting diagonal if applicable).

## Copyright

Copyright (c) 2016 [Mark Grealish][4]. See [LICENSE](LICENSE) for details.

[1]: https://en.wikipedia.org/wiki/Tic-tac-toe "Tic-tac-toe"
[2]: https://github.com/finalight/tictactoe-server/issues/1 "refactor code"
[3]: https://github.com/finalight/tictactoe-server "tictactoe-server"
[4]: https://www.bhalash.com "Mark Grealish"
