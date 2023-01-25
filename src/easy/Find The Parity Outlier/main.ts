/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
 */

export const findOutlier = (integers: number[]) => {
  // Return all numbers that are even
  let even = integers.filter((number) => number % 2 === 0);
  // Returns all numbers that are odd
  let odd = integers.filter((number) => number % 2 !== 0);
  // If even has one element that return that number if not then it is odd
  return even.length === 1 ? even[0] : odd[0];
};
