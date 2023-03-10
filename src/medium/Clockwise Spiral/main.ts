/*
https://www.codewars.com/kata/the-clockwise-spiral/javascript

Do you know how to make a spiral? Let's test it!
Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

Return an empty array if N < 1 or N is not int / number

Examples:

N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
1    2    3
8    9    4
7    6    5

N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7

N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
1   2   3   4   5
16  17  18  19  6
15  24  25  20  7
14  23  22  21  8
13  12  11  10  9

*/

const createInitialSpirial = (n: number): number[][] => {
  const SpiralArray: number[][] = [];
  for (let i = 0; i < n; i++) {
    SpiralArray[i] = [];
    for (let j = 0; j < n; j++) {
      SpiralArray[i][j] = 0;
    }
  }
  return SpiralArray;
};

export const createSpiral = (n: number) => {
  if (!Number.isInteger(n)) {
    return [];
  }

  let direction = 'Right';
  let row = 0;
  let column = -1;
  let number = 1;
  const spiral = createInitialSpirial(n);

  const moveRight = () => {
    if (column + 1 < n && spiral[row][column + 1] === 0) {
      column++;
      spiral[row][column] = number;
      number++;
    } else {
      direction = 'Down';
    }
  };

  const moveDown = () => {
    if (row + 1 < n && spiral[row + 1][column] === 0) {
      row++;
      spiral[row][column] = number;
      number++;
    } else {
      direction = 'Left';
    }
  };

  const moveLeft = () => {
    if (column - 1 < n && spiral[row][column - 1] === 0) {
      column--;
      spiral[row][column] = number;
      number++;
    } else {
      direction = 'Up';
    }
  };

  const moveUp = () => {
    if (row - 1 < n && spiral[row - 1][column] === 0) {
      row--;
      spiral[row][column] = number;
      number++;
    } else {
      direction = 'Right';
    }
  };

  while (number <= n * n) {
    console.log(spiral);
    switch (direction) {
      case 'Right':
        moveRight();
        break;
      case 'Down':
        moveDown();
        break;
      case 'Left':
        moveLeft();
        break;
      case 'Up':
        moveUp();
        break;
    }
  }

  return spiral;
};
