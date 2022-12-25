/*
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

export const evenOrOdd = (number: number) => (number % 2 ? 'Odd' : 'Even');
