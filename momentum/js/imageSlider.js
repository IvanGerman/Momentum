const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');



function getRandomIntInclusive(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 

};

let bgNum;
function getRandomNum() {
  bgNum  = getRandomIntInclusive(1, 20);
  return bgNum;
};
getRandomNum();



function setBg() {
  
  switch (imageSourceValue) {

    case 'github':
      
      let timeOfDay = getTimeOfDay();

      setBackgroundImage(`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum.toString().padStart(2, "0")}.jpg`);

      break;
  
    case 'unsplash': 
      
      async function getLinkToImage() {
        const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
        const res = await fetch(url);
        const data = await res.json();

        setBackgroundImage(data.urls.regular);
      };

      getLinkToImage();
      
      break;

    case 'flickr':
      
      async function getLinkToImage2() {
        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d25e39d4bf91cefbf893a5f0ff0aead8&tags=nature&extras=url_l&format=json&nojsoncallback=1';
        const res = await fetch(url);
        const data = await res.json();  

        setBackgroundImage(data.photos.photo[bgNum].url_l);
      };

      getLinkToImage2();
      break;

    default:
      break;
  };
};

setBg();

function setBackgroundImage(linkToImage) {

  let path = `url(${linkToImage})`;

  const img = new Image();  
  img.src = linkToImage;

  img.onload = () => {      
    body.style.backgroundImage = path;
  }; 
};

// ---------------------

function getSlideNext() { 

  bgNum += 1;
  if (bgNum === 21) {
    bgNum = 1;
  };                     
  setBg();
};

function getSlidePrev() {
  
  bgNum -= 1;
  if (bgNum === 0) {
    bgNum = 20;
  }
  setBg();
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

// ---------------------





// async function getLinkToImage(imageUrl) {
//   const url = imageUrl;
//   const res = await fetch(url);
//   const data = await res.json();
// };

