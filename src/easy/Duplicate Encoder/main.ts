/*
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

The goal of this exercise is to convert a string to a new string where each character in the
new string is "(" if that character appears only once in the original string, or ")" if that
character appears more than once in the original string. Ignore capitalization when determining
if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

 */

export const duplicateEncode = (word: string) => {
  let charCount: { [key: string]: number } = {};

  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  let newString = word
    .toLowerCase()
    .split('')
    .map((char) => {
      return charCount[char] > 1 ? ')' : '(';
    });
  return newString.join('');
};
