import { isString, split } from './helpers';

/**
 * Finnur stysta orð í streng, ef fleiri en eitt eru jafn löng, skilar fyrsta.
 * @param {unknown} str Mögulega strengur til að finna stysta orð í.
 * @returns {string | null} Stysta orð í strengnum, ef ekki strengur `null`.
 */
export function shortest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str, ' ');

  let shortestWord = '';
  for (const word of words) {
    if (shortestWord === '' || word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
console.assert(shortest('halló hæ') === 'hæ', 'shortest: skilar stysta orðinu');
console.assert(
  shortest('halló halli') === 'halló',
  'shortest: skilar fyrsta orðinu ef þau eru jafn löng',
);
console.assert(
  shortest(null) === null,
  'shortest: skilar null ef ekki er gefinn strengur',
);
console.assert(
  shortest('') === '',
  'shortest: skilar tómum streng ef tómur strengur er gefinn',
);
