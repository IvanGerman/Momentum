const timeDisplay = document.querySelector('.time');
const dateDisplay = document.querySelector('.date');


function showTime() {
  const date2 = new Date();
  const currentTime = date2.toLocaleTimeString();
  timeDisplay.textContent = currentTime;
  showDate(radioBtnValue);
  setTimeout(showTime, 1000);
}

showTime();




function showDate(lang) {
  let langObj = {
    'en': 'en-Br',
    'ru': 'ru-RU'
  }
  const date3 = new Date();
  const options = {month: 'long', weekday: 'long', day: 'numeric'};
  const currentDate = date3.toLocaleDateString(langObj[lang], options);
  dateDisplay.textContent = currentDate;
};



