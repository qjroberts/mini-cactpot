Mini Cactpot
----------------------------------------

A collection of Mini Cactpot games to play with different languages.

[NodeJS](./node)

## Rules
Mini Cactpot is a game of chance. The player is given a card with 9 squares 
arranged in a 3x3 grid. Each square contains one number, between 1 and 9, with
no repeating numbers. One square is revealed at the start of the game.

The player then has 3 turns to reveal an additional square, for a total of 4
revealed squares. Each turn the player must choose to reveal one square.

After 3 turns, the player must choose one line of 3 spots to score. The numbers
do not have to be revealed within this line. Once a line is chosen, all numbers
are revealed.

## Scoring
The score of a game is calculated by the sum of the line chosen by the player.
For example, if the 3 numbers revealed at the end of the game were 1, 2, and 3,
the player's score would be 6.

The goal of the game is to receive the maximum number of points based on this
score. The value of each score is included below:

Score | Payout
------|-------
6     | 10000
7     | 36
8     | 720
9     | 360
10    | 80
11    | 252
12    | 108
13    | 72
14    | 54
15    | 180
16    | 72
17    | 180
18    | 119
19    | 36
20    | 306
21    | 1080
22    | 144
23    | 1800
24    | 3600
