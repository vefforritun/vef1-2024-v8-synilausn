import { VOWELS } from './constants.js';
import { countGivenCharactersInString } from './helpers.js';

/**
 * Skilar fjölda sérhljóða í gefnum streng.
 * @param {unknown} str Strengur til að finna fjölda sérhljóða í.
 * @returns {number} Fjölda sérhljóða í streng, `0` ef ekki strengur.
 */
export function vowels(str) {
  return countGivenCharactersInString(str, VOWELS);
}
console.assert(
  vowels('halló') === 2,
  'vowels: skilar fjölda sérhljóða í streng',
);
console.assert(vowels('') === 0, 'vowels: skilar 0 ef tómur strengur');
console.assert(
  vowels(null) === 0,
  'vowels: skilar 0 ef ekki er gefinn strengur',
);
