Mini Cactpot - NodeJS
----------------------------------------

## Getting Started

Run the application via commandline: `npm start`.

## Instructions

Select a position to reveal based on the following grid:

```
0 1 2
3 4 5
6 7 8
```

Select a line to score based on the following grid:

```
3 4 5 6 7
2 - - -
1 - - -
0 - - -
```

**Note:** 3 and 7 represent diagonal lines.

Line | Positions Scored
-----|-----------------
0    | [6, 7, 8]
1    | [3, 4, 5]
2    | [0, 1, 2]
3    | [0, 4, 8]
4    | [0, 3, 6]
5    | [1, 4, 7]
6    | [2, 5, 8]
7    | [2, 4, 6]
