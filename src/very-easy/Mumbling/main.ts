/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

export const accum = (string: string) =>
  string
    .split('')
    .map(
      (letter, index) =>
        `${letter.toUpperCase()}${letter.repeat(index).toLowerCase()}`
    )
    .join('-');
