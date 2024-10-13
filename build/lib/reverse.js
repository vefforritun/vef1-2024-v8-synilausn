import { isString } from './helpers.js';

/**
 * Snýr streng við.
 * @param {unknown} str Snýr streng við.
 * @returns {string|null} Strengnum snúið við, ef ekki strengur skilar `null`.
 */
export function reverse(str) {
  if (!isString(str)) {
    return null;
  }

  return str.split('').reverse().join('');
}
console.assert(
  reverse(null) === null,
  'reverse: skilar tómum streng ef ekki er gefinn strengur',
);
console.assert(
  reverse('') === '',
  'reverse: snúinn tómi strengurinn er tómi strengurinn',
);
console.assert(reverse('hello') === 'olleh', 'reverse: snýr við streng');
