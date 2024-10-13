/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { analyse } from './lib/analyse.js';

/**
 * Uppfærir element með niðurstöðum greiningar. Ef niðurstaða er `null` er
 * greining falin, annars er hún birt.
 * Gerir ráð fyrir að element innihaldi element með eftirfarandi `class`:
 * - `.input` fyrir upprunalegan streng.
 * - `.longest` fyrir lengsta orð.
 * - `.shortest` fyrir stysta orð.
 * - `.palindrome` fyrir hvort strengur sé samhverfur, birt ef samhverfur.
 * - `.vowels` fyrir fjölda sérhljóða.
 * - `.consonants` fyrir fjölda samhljóða.
 * - `.reversed` fyrir snúinn streng.
 *
 * @param {HTMLElement} element Element sem inniheldur niðurstöður.
 * @param {import("./lib/analyse").Analysis | null} analysis Niðurstaða greiningar eða `null`.
 */
function updateFormUi(element, analysis) {
  // Ef greining er `null` er element falið
  if (analysis === null) {
    element.classList.add('hidden');
    return;
  }

  // annars birtum við
  element.classList.remove('hidden');

  // Finnum element fyrir hverja niðurstöðu
  const inputElement = element.querySelector('.input');
  const longestElement = element.querySelector('.longest');
  const shortestElement = element.querySelector('.shortest');
  const palindromeElement = element.querySelector('.palindrome');
  const vowelsElement = element.querySelector('.vowels');
  const consonantsElement = element.querySelector('.consonants');
  const reversedElement = element.querySelector('.reversed');

  // Athugum hvort element séu til og uppfærum ef svo er, ef ekki skrifa út villu
  if (inputElement) {
    inputElement.textContent = analysis.input;
  } else {
    console.error('element .input fannst ekki');
  }

  if (longestElement) {
    longestElement.textContent = analysis.longestWord;
  } else {
    console.error('element .longest fannst ekki');
  }

  if (shortestElement) {
    shortestElement.textContent = analysis.shortestWord;
  } else {
    console.error('element .shortest fannst ekki');
  }

  if (palindromeElement) {
    if (analysis.isPalindrome) {
      palindromeElement.classList.add('hidden');
    } else {
      palindromeElement.classList.remove('hidden');
    }
  } else {
    console.error('element .palindrome fannst ekki');
  }

  if (vowelsElement) {
    vowelsElement.textContent = analysis.vowelCount.toString();
  } else {
    console.error('element .vowels fannst ekki');
  }

  if (consonantsElement) {
    consonantsElement.textContent = analysis.consonantCount.toString();
  } else {
    console.error('element .consonants fannst ekki');
  }

  if (reversedElement) {
    reversedElement.textContent = analysis.reversed;
  } else {
    console.error('element .reversed fannst ekki');
  }
}

/** Form fyrir strengjagreini, notum class til að merkja, gætum haft fleiri en eitt. */
const allStringForms = document.querySelectorAll('.string-form');

function updateUi(form) {
  if (!(form instanceof HTMLFormElement)) {
    console.error('element er ekki form', form);
    return;
  }

  const textarea = form.querySelector('textarea');
  const input = textarea?.value ?? '';

  // Greinum streng
  const analysis = analyse(input);
  const outputElement = form.querySelector('.output');

  if (outputElement instanceof HTMLElement) {
    updateFormUi(outputElement, analysis);
  } else {
    console.error('element .output fannst ekki');
  }
}

/**
 *
 * @param {Event} event
 * @returns
 */
function submitHandler(event) {
  event.preventDefault();
  updateUi(event.target);
}

/**
 *
 * @param {Event} event
 * @returns
 */
function inputHandler(event) {
  event.preventDefault();
  const { target } = event;
  if (target instanceof HTMLElement) {
    updateUi(target.closest('form'));
  }
}

/**
 *
 * @param {Event} event
 * @returns
 */
function resetHandler(event) {
  event.preventDefault();
  console.log('reset');
}

// Fyrir hvert form í formum:
// * Bætum við event handler á submit sem keyrir strengjagreiningu
// * Bætum við event handler á textarea sem keyrir strengjagreiningu þegar notandi skrifar
// * Bætum við event handler á reset sem hreinsar út niðurstöður
for (const form of allStringForms) {
  if (form instanceof HTMLFormElement) {
    form.addEventListener('submit', submitHandler);
    form.addEventListener('reset', resetHandler);

    // Finnum öll textara sem eru innan forms
    const textareas = form.querySelectorAll('textarea');
    for (const textarea of textareas) {
      textarea.addEventListener('input', inputHandler);
    }
  } else {
    console.error('element is not a form', form);
  }
}
