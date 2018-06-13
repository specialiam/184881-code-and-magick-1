'use strict';

//Объявление констант (const.js)

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var wizards = [];

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

//Вызов функции генерации волшебников
createWizards(COAT_COLORS, EYES_COLORS, WIZARD_NAMES, WIZARD_SURNAMES, 4);

//Создание фрагмента документа
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

//Открытие блока с похожими персонажами
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpenBlock = document.querySelector('.setup-open');
setupOpenBlock.addEventListener('click', openPopup);

var setupOpenIcon = setupOpenBlock.querySelector('.setup-open-icon');
setupOpenBlock.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var setupCloseBlock = document.querySelector('.setup-close');
setupCloseBlock.addEventListener('click', closePopup);
setupCloseBlock.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var setupPlayer = document.querySelector('.setup-player');
var setupWizard = setupPlayer.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function() {
  var coatColorInput = setupPlayer.querySelector('#coat-color');

  coatColorInput.value = changeFill(this, COAT_COLORS);
});

wizardEyes.addEventListener('click', function() {
  var eyesColorInput = setupPlayer.querySelector('#eyes-color');

  eyesColorInput.value = changeFill(this, EYES_COLORS);
});

setupFireballWrap.addEventListener('click', function () {
  var fireballColorInput = setupPlayer.querySelector('#fireball-color');

  fireballColorInput.value = changeBackColor(this, FIREBALL_COLORS);
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function genrRandom(array) {
  var index = getRandomInt(0, array.length - 1);
  var randomValue = array[index];

  return randomValue;
};

//Генерация массива волшебников (wizardGenerate.js)

function createWizards(coatColors, eyesColors, wizardNames, wizardSurnames, quantity) {
  for (var i = 0; i < quantity; i++) {
    wizards[i] = {
      name: genrRandom(wizardNames) + ' ' + genrRandom(wizardSurnames),
      coatColor: genrRandom(coatColors),
      eyesColor: genrRandom(eyesColors)
    };
  }

  return wizards;
};

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

function openPopup() {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

function closePopup() {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

function changeFill(curElement, colorArray) {
  var fillColor = genrRandom(colorArray);
  curElement.style.fill = fillColor;

  return fillColor;
};

function changeBackColor(curElement, colorArray) {
  var backColor = genrRandom(colorArray);
  curElement.style.background = backColor;

  return backColor;
};








