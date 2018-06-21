'use strict';

(function () {
  var setupPlayer = document.querySelector('.setup-player');
  var setupWizard = setupPlayer.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    var coatColorInput = setupPlayer.querySelector('#coat-color');

    coatColorInput.value = changeFill(wizardCoat, window.data.COAT_COLORS);
  });

  wizardEyes.addEventListener('click', function () {
    var eyesColorInput = setupPlayer.querySelector('#eyes-color');

    eyesColorInput.value = changeFill(wizardEyes, window.data.EYES_COLORS);
  });

  setupFireballWrap.addEventListener('click', function () {
    var fireballColorInput = setupPlayer.querySelector('#fireball-color');

    fireballColorInput.value = changeBackColor(setupFireballWrap, window.data.FIREBALL_COLORS);
  });

  function changeFill(curElement, colorArray) {
    var fillColor = window.utils.genrRandom(colorArray);
    curElement.style.fill = fillColor;

    return fillColor;
  }

  function changeBackColor(curElement, colorArray) {
    var backColor = window.utils.genrRandom(colorArray);
    curElement.style.background = backColor;

    return backColor;
  }
})();
