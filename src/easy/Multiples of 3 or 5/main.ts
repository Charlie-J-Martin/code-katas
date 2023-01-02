/*
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// 10
// [3, 5, 6, 9]
// 23

export const solution = (number: number) => {
  const multiples = [];
  for (let x = 1; x < number; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      multiples.push(x);
    }
  }
  return multiples.reduce((previous, current) => {
    return previous + current;
  }, 0);
};
