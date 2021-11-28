const greetingSpan = document.querySelector('.greeting');
const nameInput2 = document.querySelector('.name');

const date = new Date();
const hours = date.getHours();

let timeOfDayArray = ['night', 'morning', 'afternoon', 'evening'];

function capitalize(s)  {
    return s[0].toUpperCase() + s.slice(1);
};

function getTimeOfDay() {

  let index = Math.floor( hours / 6 );
  let timeOfDay = timeOfDayArray[index];
  return timeOfDay;

};

let greetingTranslation = {
  'en':  `Good ${capitalize(getTimeOfDay())}, `,
  'ru': {
    'night': `Доброй Ночи, `,
    'morning': `Доброе Утро, `,
    'afternoon': `Добрый День, `,
    'evening': `Добрый Вечер, `
  }
};

let greetingText = `Good ${capitalize(getTimeOfDay())}, `;

function showGreeting(lang) {

  if ( lang === 'ru' ) {
    greetingSpan.textContent = greetingTranslation[lang][getTimeOfDay()];
    return;
  }
  greetingSpan.textContent = greetingTranslation[lang];

};

showGreeting();





const nameInput = document.querySelector("body > main > div.greeting-container > input");

function setLocalStorage() {

  localStorage.setItem('name', nameInput.value);

};

window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {

  if(localStorage.getItem('name')) {

    nameInput.value = localStorage.getItem('name');

  };

};

window.addEventListener('load', getLocalStorage);



 