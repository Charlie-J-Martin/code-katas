/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

export const getCount = (str: string) => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let character of str) {
    if (vowels.includes(character)) {
      count++;
    }
  }
  return count;
};
