import { consonants } from './consonants.js';
import { isString } from './helpers.js';
import { longest } from './longest.js';
import { palindrome } from './palindrome.js';
import { reverse } from './reverse.js';
import { shortest } from './shortest.js';
import { vowels } from './vowels.js';

/**
 * @typedef {Object} Analysis
 * @property {string} input Upprunalegi strengurinn.
 * @property {string} reversed Upprunalegi strengurinn snúinn við.
 * @property {string} longestWord Lengsta orð í streng.
 * @property {string} shortestWord Stysta orð í streng.
 * @property {boolean} isPalindrome `true` ef strengur er samhverfur annars `false`.
 * @property {number} vowelCount Fjöldi sérhljóða í streng.
 * @property {number} consonantCount Fjöldi fyrirhljóða í streng.
 */

/**
 * Greinir streng og skilar hlut með niðurstöðum.
 * @param {unknown} input Hugsanlegur strengur til að greina.
 * @returns {Analysis | null} Niðurstöður greiningar á streng.
 */
export function analyse(input) {
  if (!isString(input)) {
    return null;
  }

  const reversed = reverse(input) ?? '';
  const longestWord = longest(input) ?? '';
  const shortestWord = shortest(input) ?? '';
  const isPalindrome = palindrome(input);
  const vowelCount = vowels(input);
  const consonantCount = consonants(input);

  return {
    input,
    reversed,
    longestWord,
    shortestWord,
    isPalindrome,
    vowelCount,
    consonantCount,
  };
}
