'use strict';

(function () {
  var setupPlayer = document.querySelector('.setup-player');
  var setupWizard = setupPlayer.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');
  var coatColorInput = setupPlayer.querySelector('#coat-color');
  var eyesColorInput = setupPlayer.querySelector('#eyes-color');
  var fireballColorInput = setupPlayer.querySelector('#fireball-color');

  wizardCoat.addEventListener('click', function () {
    coatColorInput.value = changeFill(wizardCoat, window.data.COAT_COLORS);
    window.wizard.onCoatChange(coatColorInput.value);
  });

  wizardEyes.addEventListener('click', function () {
    eyesColorInput.value = changeFill(wizardEyes, window.data.EYES_COLORS);
    window.wizard.onEyesChange(eyesColorInput.value);
  });

  setupFireballWrap.addEventListener('click', function () {
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
