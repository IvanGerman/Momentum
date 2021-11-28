const allQuotes = {
  'en': [
    {
      "text": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      "author": "Steve Mcconnell"
    },
    {
      "text": "Program complexity grows until it exceeds the capabilities of the programmer who must maintain it.",
      "author": "Arthur Bloch. Murphy's laws"
    },
      {
      "text": "Walking on water and developing software from a specification are easy if both are frozen.",
      "author": "Edward Berard"
    },
    {
      "text": "An army of rams led by a lion will always triumph over an army of lions headed by a ram. ",
      "author": "Napoleon Bonaparte"
    },
    {
      "text": "Don't think too much. This is how you create problems that did not exist in the first place.",
      "author": "Friedrich Nietzsche"
    },
    {
      "text": "Where a person resists, there is his prison.",
      "author": "Epictetus"
    }
  ],
  'ru': [
    {
      "text": "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете",
      "author": "Стив Макконнелл"
    },
    {
      "text": "Сложность программы растет до тех пор, пока не превысит способности программиста",
      "author": "Артур Блох. Законы Мэрфи"
    },
      {
      "text": "Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены",
      "author": "И. Берард"
    },
    {
      "text": "Войско баранов, возглавляемое львом, всегда одержит победу над войском львов, возглавляемых бараном. ",
      "author": "Наполеон Бонапарт"
    },
    {
      "text": "Не нужно додумывать слишком много. Так вы создаете проблемы, которых изначально не было.",
      "author": "Фридрих Ницше"
    },
    {
      "text": "Где человек находится противясь, там его тюрьма.",
      "author": "Эпиктет"
    }
  ]
};

const quoteDiv = document.querySelector('.quote');
const authorDiv = document.querySelector('.author');
const changeQuoteBtn = document.querySelector('.change-quote');

function showNewQuote() {
  showQuote(radioBtnValue);
};

changeQuoteBtn.addEventListener('click', showNewQuote);


let indexForQuotes; 

function showQuote(lang = radioBtnValue) { 
  
  indexForQuotes = getRandomIntInclusive(0, 5);

  quoteDiv.textContent = allQuotes[lang][indexForQuotes].text;
  authorDiv.textContent = allQuotes[lang][indexForQuotes].author;

};

showQuote();


function translateQuote(lang) {

  quoteDiv.textContent = allQuotes[lang][indexForQuotes].text;
  authorDiv.textContent = allQuotes[lang][indexForQuotes].author;
  
};