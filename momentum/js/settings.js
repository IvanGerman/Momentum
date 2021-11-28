const settingsIcon = document.querySelector('.settings-icon');
const settingsDiv = document.querySelector('.settings');

const settingsObjForLocaleStorage = {
  'language': '',
  'imageSource': '',
  'widgets': {
    'time': '',
    'date': '',
    'greeting': '',
    'quote': '',
    'weather': '',
    'audio': '',
    'todo': ''
  }
};


settingsIcon.addEventListener('click', () => {

  if (settingsDiv.style.left === '1vw') {
    settingsDiv.style.left = '-41vw';
    return;
  }
  settingsDiv.style.left = '1vw';
});


let radioBtnValue; 
if ( localStorage.getItem('language') === null ) {
  radioBtnValue = 'en'; 
} else {
  radioBtnValue = localStorage.getItem('language'); 
}



function setLanguage(radioBtn) {
  localStorage.setItem('language', radioBtn.value);
  radioBtnValue = localStorage.getItem('language');
  showGreeting(radioBtn.value);
  showDate(radioBtn.value);
  getWeather(radioBtn.value);
  setSettingsNames(radioBtn.value);
  translateQuote(radioBtn.value);
};




const langTopicDiv = document.querySelector('.lang-topic');
const labelEnglish = document.querySelector("body > footer > div.settings > div.language > div.radioBtn-wrapper > div:nth-child(1) > label");
const labelRussian = document.querySelector("body > footer > div.settings > div.language > div.radioBtn-wrapper > div.lang-ru-div > label");
const imageSourceTopicDiv = document.querySelector('.image-source-topic');
const labelGithub = document.querySelector("body > footer > div.settings > div.image-source > div.radioBtn-wrapper2 > div.github-div > label");
const labelUnsplash = document.querySelector("body > footer > div.settings > div.image-source > div.radioBtn-wrapper2 > div.unsplash-div > label");
const labelFlickr = document.querySelector("body > footer > div.settings > div.image-source > div.radioBtn-wrapper2 > div.flickr-div > label");
const settingsP = document.querySelector('.settings-p');

const widgetsTopicDiv = document.querySelector('.widgets-topic');
const divTime = document.querySelector("body > footer > div.settings > div.widgets > div.radioBtn-wrapper3 > div:nth-child(1) > div.widget-name");
const divDate = document.querySelector("body > footer > div.settings > div.widgets > div.radioBtn-wrapper3 > div:nth-child(2) > div.widget-name");
const divGreeting = document.querySelector("body > footer > div.settings > div.widgets > div.radioBtn-wrapper3 > div:nth-child(3) > div.widget-name");
const divQuote = document.querySelector("body > footer > div.settings > div.widgets > div.radioBtn-wrapper3 > div:nth-child(4) > div.widget-name");
const divWeather = document.querySelector("body > footer > div.settings > div.widgets > div.radioBtn-wrapper3 > div:nth-child(5) > div.widget-name");
const divAudio = document.querySelector("body > footer > div.settings > div.widgets > div.radioBtn-wrapper3 > div:nth-child(6) > div.widget-name");
const divToDo = document.querySelector("body > footer > div.settings > div.widgets > div.radioBtn-wrapper3 > div:nth-child(7) > div.widget-name");

let settingsNames = {
  'en': {
    'language': 'Language',
    'english': 'English',
    'russian': 'Russian',
    'imageSource': 'Image Source',
    'github': 'Github',
    'unsplash': 'Unsplash',
    'flickr': 'Flickr',
    'settings': 'Settings',

    'widgets': 'Widgets',
    'time': 'Time',
    'date': 'Date',
    'greeting': 'Greeting',
    'quote': 'Quote',
    'weather': 'Weather',
    'audio': 'Audio',
    'todo': 'ToDo'
  },
  'ru': {
    'language': 'Язык',
    'english': 'Английский',
    'russian': 'Русский',
    'imageSource': 'Источник картинок',
    'github': 'Гитхаб',
    'unsplash': 'Ансплэш',
    'flickr': 'Фликр',
    'settings': 'Настройки',

    'widgets': 'Виджеты',
    'time': 'Время',
    'date': 'Дата',
    'greeting': 'Привет.',
    'quote': 'Цитата',
    'weather': 'Погода',
    'audio': 'Аудио',
    'todo': 'ТуДу'
  }
};

function setSettingsNames(lang) {
  langTopicDiv.textContent = settingsNames[lang].language;
  labelEnglish.textContent = settingsNames[lang].english;
  labelRussian.textContent = settingsNames[lang].russian;
  imageSourceTopicDiv.textContent = settingsNames[lang].imageSource;
  labelGithub.textContent = settingsNames[lang].github;
  labelUnsplash.textContent = settingsNames[lang].unsplash;
  labelFlickr.textContent = settingsNames[lang].flickr;
  settingsP.textContent = settingsNames[lang].settings;

  widgetsTopicDiv.textContent = settingsNames[lang].widgets;
  divTime.textContent = settingsNames[lang].time;
  divDate.textContent = settingsNames[lang].date;
  divGreeting.textContent = settingsNames[lang].greeting;
  divQuote.textContent = settingsNames[lang].quote;
  divWeather.textContent = settingsNames[lang].weather;
  divAudio.textContent = settingsNames[lang].audio;
  divToDo.textContent = settingsNames[lang].todo;
};




const imageSourceDiv = document.querySelector('.image-source');


let imageSourceValue;
if ( localStorage.getItem('imageSource') === null ) {
  imageSourceValue = 'github'; 
} else {
  imageSourceValue = localStorage.getItem('imageSource'); 
}



function setSource(radioBtn) {
  localStorage.setItem('imageSource', radioBtn.value);
  imageSourceValue = localStorage.getItem('imageSource');
  setBg();
};


setSettingsNames(radioBtnValue);
showGreeting(radioBtnValue);


console.log(
  `Самооценка: 154,5 баллов
  
  
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото 

Частично выполненные пункты:
1) настройки приложения сохраняются при перезагрузке страницы 

Выполненные пункты:
1) время выводится в 24-часовом формате, например: 21:01:00 

2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) 

3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" 

4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток 

5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется 

6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз 

7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) 

8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) 

9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения 

10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage 

11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел 

12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) 

13) при загрузке страницы приложения отображается рандомная цитата и её автор 

14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) 

15) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause 

16) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play 

17) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) 

18) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем 

19) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. 

20) добавлен прогресс-бар в котором отображается прогресс проигрывания 

21) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека 

22) над прогресс-баром отображается название трека 

23) отображается текущее и общее время воспроизведения трека 

24) есть кнопка звука при клике по которой можно включить/отключить звук 

25) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука 

26) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте 

27) переводится язык и меняется формат отображения даты 

28) переводится приветствие и placeholder 

29) переводится прогноз погоды в т.ч описание погоды и город по умолчанию 

30) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая 

31) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется 

32) в качестве источника изображений может использоваться Unsplash API 

33) в качестве источника изображений может использоваться Flickr API 

34) в настройках приложения можно указать язык приложения (en/ru или en/be)  

35) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API 

36) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал 

37) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их 

38) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным 

`
);