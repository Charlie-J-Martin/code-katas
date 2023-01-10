/*
https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

Write a function that takes in a string of one or more words, and returns the same string, but with all five
or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters
and spaces. Spaces will be included only when more than one word is present.
*/


export const spinWords = (string: string) => {
  let words: string[] = string.split(" ");
  return words.map((word) => word.length >= 5 ? word.split('').reverse().join('') : word).join(" ")
}
