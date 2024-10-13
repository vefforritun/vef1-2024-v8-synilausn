import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Finnur lengsta orð í streng, ef fleiri en eitt eru jafn löng, skilar fyrsta.
 * @param {unknown} str Mögulega strengur til að finna lengsta orð í.
 * @returns {string | null} Lengsta orð í strengnum, ef ekki strengur `null`.
 */
export function longest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = splitOnWhitespace(str);

  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.assert(
  longest('halló hæ') === 'halló',
  'longest: skilar lengsta orðinu',
);
console.assert(
  longest('halló halli') === 'halló',
  'longest: skilar fyrsta orðinu ef þau eru jafn löng',
);
console.assert(
  longest(null) === null,
  'longest: skilar null ef ekki er gefinn strengur',
);
console.assert(
  longest('') === '',
  'longest: skilar tómum streng ef tómur strengur er gefinn',
);
