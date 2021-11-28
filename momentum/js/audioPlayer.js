const playList = [
  {      
    title: 'Aqua Caelestis',
    src: './assets/sounds/Aqua Caelestis.mp3 ',
    duration: '00:58',
    dataValue: 0
  },  
  {      
    title: 'River Flows In You',
    src: './assets/sounds/River Flows In You.mp3',
    duration: '03:50',
    dataValue: 1
  },
  {      
    title: 'Summer Wind',
    src: './assets/sounds/Summer Wind.mp3',
    duration: '05:05',
    dataValue: 2
  },
  {      
    title: 'Ennio Morricone',
    src: './assets/sounds/Ennio Morricone.mp3',
    duration: '05:03',
    dataValue: 3
  }
];

const audioPlayer = document.querySelector('.player');
const playListContainer = document.querySelector('.play-list');

playList.forEach(el => {
  
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = el.title;
  li.setAttribute("id", el.dataValue); 
  playListContainer.append(li);

});




const playButton = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
const allPlaylistButtons = document.querySelectorAll('.play-item');

const showTimeDiv = document.querySelector('.show-time');
const trackNameDiv = document.querySelector('.track-name');

const audio = new Audio();

const playProgressBar = document.querySelector('.play-progress-filled');
function updatePlayProgressBar() {
  const percent = (audio.currentTime / audio.duration) * 100;
  playProgressBar.style.flexBasis = `${percent}%`;
  showTimeDiv.textContent = `${formatSecondsAsTime(audio.currentTime)} / ${formatSecondsAsTime(audio.duration)}`;
};
audio.ontimeupdate = function() {updatePlayProgressBar()};

let isPlay = false;
let trekNumber = 0;

function formatSecondsAsTime(secs) {
  
  let min = Math.floor(secs / 60);
  let sec = Math.floor(secs % 60);

  if (sec < 10){ 
    sec  = "0" + sec;
  };

  return min + ':' + sec;
};







function playAudio() { 
  
  if (isPlay === false) {
    isPlay = true;


    function playRecursion(songNumber) {

      audio.src = playList[songNumber].src;
      audio.currentTime = 0;
      playButton.style.backgroundImage = 'url("./assets/svg/pause.svg")';

      let style = playListContainer.children[trekNumber].style;
      style.setProperty('--background', 'url("./../assets/svg/pause.svg")');

      trackNameDiv.textContent = playList[songNumber].title;
      audio.play();

      let currentLi = playListContainer.children[songNumber];
      currentLi.style.color = 'gold';

      audio.onended = function() {
        
        trekNumber++;
        if (trekNumber === 4) { trekNumber = 0 };
        currentLi.style.color = ''; 
        playRecursion(trekNumber);
      };
    };

    playRecursion(trekNumber);

    return;
  };
  
  if (isPlay === true) { 
    
    isPlay = false;
    playButton.style.backgroundImage = 'url("./assets/svg/play.svg")';
    let style = playListContainer.children[trekNumber].style;
    style.setProperty('--background', 'url("./../assets/svg/play.svg")');

    let currentLi = playListContainer.children[trekNumber];
    currentLi.style.color = '';

    audio.pause();

    
  };
  
};




playButton.addEventListener('click', playAudio);
playNext.addEventListener('click', playNextTrack);
playPrev.addEventListener('click', playPrevTrack);


function playNextTrack() {
  let currentLi = playListContainer.children[trekNumber];
  currentLi.style.color = '';
  let style = playListContainer.children[trekNumber].style;
  style.setProperty('--background', 'url("./../assets/svg/play.svg")');

  trekNumber++;
  if (trekNumber === 4) { trekNumber = 0 };
  isPlay = false;
  playAudio();
};

function playPrevTrack() {
  let currentLi = playListContainer.children[trekNumber];
  currentLi.style.color = '';
  let style = playListContainer.children[trekNumber].style;
  style.setProperty('--background', 'url("./../assets/svg/play.svg")');

  trekNumber--;
  if (trekNumber === -1) { trekNumber = 3 };
  isPlay = false;
  playAudio();
};



allPlaylistButtons.forEach( (elem) => {
  elem.addEventListener('click', playThisTrack);
});

let isPlay2 = false ;
function playThisTrack() { 

  let currentLi = playListContainer.children[trekNumber]; 
  currentLi.style.color = ''; 

  let style = playListContainer.children[trekNumber].style;
  style.setProperty('--background', 'url("./../assets/svg/play.svg")');

  audio.pause();
  if (isPlay2 === true) { 
    isPlay2 = false; 
    playButton.style.backgroundImage = 'url("./assets/svg/play.svg")';
    return;
  };
  isPlay = false;

  trekNumber = Number(this.id); 
  previousPlayButton = trekNumber;
  isPlay2 = true;
  playAudio();
};







// ---при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека---

const playProgress = document.querySelector('.play-progress');

function jump(event) {
  const jumpTime = (event.offsetX / playProgress.offsetWidth) * audio.duration;
  audio.currentTime = jumpTime;
};

let mousedown = false;

playProgress.addEventListener('click', jump);
playProgress.addEventListener('mousemove', (event) => mousedown && jump(event));
playProgress.addEventListener('mousedown', () => mousedown = true);
playProgress.addEventListener('mouseup', () => mousedown = false); 




// ---volume--------------------

const audioVolumenButton = document.querySelector('.audio-controls-volume-button');

function toggleVolume() {
  if ( audio.muted ) {
    audio.muted = false; 
    return;
  };
  audio.muted = true;
}

audioVolumenButton.addEventListener('click', toggleVolume);


const volumenSlider = document.querySelector('.volumen-slider');

function updateSlider() {
  audio[this.name] = this.value;
};

volumenSlider.addEventListener('change', updateSlider);
volumenSlider.addEventListener('mousemove', updateSlider);

