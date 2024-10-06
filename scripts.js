/**
 * Sýnilausn á verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

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
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = split(str, ' ');

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

function shortest(str) {
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

function reverse(str) {
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

function palindrome(str) {
  if (!isString(str)) {
    return false;
  }

  if (str === '') {
    return false;
  }

  const reversed = reverse(str);

  // Hér lendum við í því að þar sem `reverse` *getur* skilað `null` þá ættum
  // við að athuga það líka þó svo að við vitum að við sendum inn streng.
  // Ef kveikt er á „JS Check“ í VSCode þá kemur villumelding ef við gerum ekki.
  if (!isString(reversed)) {
    return false;
  }

  return str.toLocaleLowerCase() === reversed.toLocaleLowerCase();
}
console.assert(
  palindrome('heh') === true,
  'palindrome: skilar `true` ef `str` er samhverfur',
);
console.assert(
  palindrome('halló') === false,
  'palindrome: skilar `false` ef `str` er ekki samhverfur',
);
console.assert(
  palindrome(null) === false,
  'palindrome: skilar `false` ef `str` er ekki strengur (null)',
);
console.assert(
  palindrome('heh HEH') === true,
  'palindrome: ekki skiptir máli hvort stafir séu hástafir eða lágstafir.',
);
console.assert(
  palindrome('heh HEH!') === false,
  'palindrome: ekki þarf að fjarlægja bil, tölustafi eða önnur tákn.',
);
console.assert(
  palindrome('') === false,
  'palindrome: tómur strengur er ekki samhverfur.',
);

/**
 * Telur fjölda stafa í streng sem eru í characters fylki.
 * @param {string} str Strengur til að telja stafi í
 * @param {string[]} characters Fylki af stöfum sem á að telja
 * @returns {number} Fjöldi stafa í streng sem eru í characters
 */
function countGivenCharactersInString(str, characters) {
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

function vowels(str) {
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

function consonants(str) {
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

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Birta leiðbeiningar
  const instructions = `Sláðu inn streng með nokkrum orðum til að fá upplýsingar um:
- Lengsta orðið.
- Stysta orðið.
- Strenginn snúið við.
- Fjölda sérhljóða í streng.
- Fjölda samhljóða í streng.
- Hvort strengurinn sé samhverfur.`;
  alert(instructions);

  do {
    // Biðja um streng
    const str = prompt('Sláðu inn streng með nokkrum orðum');

    // Ýtt á cancel eða tómi strengur? Bjóða að keyra aftur.
    if (str === null || str === '') {
      continue;
    }

    // Birta upplýsingar
    const longestWord = longest(str);
    const shortestWord = shortest(str);
    const reversed = reverse(str);
    const vowelCount = vowels(str);
    const consonantCount = consonants(str);
    const isPalindrom = palindrome(str);

    const result = `Lengsta orðið er: ${longestWord}
Stysta orðið er: ${shortestWord}
Strengurinn snúinn við: ${reversed}
Fjöldi sérhljóða í streng: ${vowelCount}
Fjöldi samhljóða í streng: ${consonantCount}
Strengurinn ${isPalindrom ? 'er' : 'er ekki'} samhverfur.`;

    alert(result);

    // Spyrja hvort notandi vilji prófa aftur
  } while (confirm('Viltu prófa aftur?'));
}
