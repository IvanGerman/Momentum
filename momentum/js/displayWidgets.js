function displayTimeWidget(radioBtn) {
  if (radioBtn.value === 'show') {
    timeDisplay.style.opacity = 1;
    return;
  };
  if (radioBtn.value === 'hide') {
    timeDisplay.style.opacity = 0;
  };
};

function displayDateWidget(radioBtn) {
  if (radioBtn.value === 'show') {
    dateDisplay.style.opacity = 1;
    return;
  };
  if (radioBtn.value === 'hide') {
    dateDisplay.style.opacity = 0;
  };
};

function displayGreetingWidget(radioBtn) {  
  if (radioBtn.value === 'show') {
    greetingSpan.style.opacity = 1;
    nameInput2.style.opacity = 1;
    return;
  };
  if (radioBtn.value === 'hide') {
    greetingSpan.style.opacity = 0;
    nameInput2.style.opacity = 0;
  };
};

function displayQuoteWidget(radioBtn) {
  if (radioBtn.value === 'show') {
    quoteDiv.style.opacity = 1;
    authorDiv.style.opacity = 1;
    return;
  };
  if (radioBtn.value === 'hide') {
    quoteDiv.style.opacity = 0;
    authorDiv.style.opacity = 0;
  };
};

function displayWeatherWidget(radioBtn) {
  if (radioBtn.value === 'show') {
    weatherDiv.style.opacity = 1;
    return;
  };
  if (radioBtn.value === 'hide') {
    weatherDiv.style.opacity = 0;
  };
};

function displayAudioWidget(radioBtn) {
  if (radioBtn.value === 'show') {
    audioPlayer.style.opacity = 1;
    return;
  };
  if (radioBtn.value === 'hide') {
    audioPlayer.style.opacity = 0;
  };
};

function displayToDoWidget(radioBtn) {
  if (radioBtn.value === 'show') {
    todoWrapper.style.opacity = 1;
    return;
  };
  if (radioBtn.value === 'hide') {
    todoWrapper.style.opacity = 0;
  };
};

