/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
export const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
export function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

/**
 * Telur fjölda stafa í streng sem eru í characters fylki.
 * @param {unknown} str Strengur til að telja stafi í
 * @param {string[]} characters Fylki af stöfum sem á að telja
 * @returns {number} Fjöldi stafa í streng sem eru í characters
 */
export function countGivenCharactersInString(str, characters) {
  if (!isString(str)) {
    return 0;
  }

  const splitStr = split(str, '');

  let count = 0;

  for (const char of splitStr) {
    if (characters.includes(char)) {
      count += 1;
    }
  }

  return count;
}

console.assert(
  countGivenCharactersInString('', []) === 0,
  'countGivenCharactersInString: skilar 0 ef tómi strengur',
);
console.assert(
  countGivenCharactersInString('asdf', []) === 0,
  'countGivenCharactersInString: skilar 0 ef tóma fylkið',
);
console.assert(
  countGivenCharactersInString('halló', ['a', 'l']) === 3,
  'countGivenCharactersInString: skilar fjölda stafa í streng',
);

/**
 * Fjarlægja öll börn úr HTML element.
 * @param {HTMLElement} element
 */
export function emptyElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
