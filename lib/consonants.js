import { CONSONANTS } from './constants';
import { countGivenCharactersInString } from './helpers';

/**
 * Skilar fjölda samhljóða í gefnum streng.
 * @param {unknown} str Strengur til að finna fjölda samhljóða í.
 * @returns {number} Fjölda samhljóða í streng, `0` ef ekki strengur.
 */
export function consonants(str) {
  // Hvað ef við myndum vilja hafa `consonants` fall sem telur enska eða íslenska samhljóða?
  return countGivenCharactersInString(str, CONSONANTS);
}
console.assert(
  consonants('halló') === 3,
  'consonants: skilar fjölda samhljóða í streng',
);
console.assert(consonants('') === 0, 'consonants: skilar 0 ef tómur strengur');
console.assert(
  consonants(null) === 0,
  'consonants: skilar 0 ef ekki er gefinn strengur',
);
