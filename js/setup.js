'use strict';

//Объявление констант (const.js)

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

//Вспомогательные функции (utils.js)
/**
 * Функция генерации случайного числа
 * @param {int} min - минимальное значение
 * @param {int} max - максимальное значение
 * @returns {int} - возвращает случайное значение
 */
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Функция генерации случайных данных
 * @param {array} array - входной массив
 * @param {boolean} repeat - допускаются ли повторения
 * @returns {*} - возвращает случаный элемент массива
 */
var genrRandom = function (array, repeat) {
  var index = getRandomInt(0, array.length - 1);
  var randomValue = array[index];

  if (!repeat) {
    array.splice(index, 1);
  }

  return randomValue;
};

//Генерация массива волшебников (wizardGenerate.js)

//Создаем массив волшебников
var wizards = [];

/**
 * Функции генерации волшебников
 * @param {array} coatColors - массив цветов туник
 * @param {array} eyesColors - массив цветов глаз
 * @param {array} wizardNames - массив имен
 * @param {array} wizardSurnames - массив фамилий
 * @param {int} quantity - количество волшебников
 * @returns {array} - возвращает массив объектов описывающих волшебников
 */
var createWizards = function (coatColors, eyesColors, wizardNames, wizardSurnames, quantity) {
  for (var i = 0; i < quantity; i++) {
    wizards[i] = {
      name: genrRandom(wizardNames, false) + ' ' + genrRandom(wizardSurnames, false),
      coatColor: genrRandom(coatColors, false),
      eyesColor: genrRandom(eyesColors, false)
    };
  }

  return wizards;
};

//Вызов функции генерации волшебников
createWizards(COAT_COLORS, EYES_COLORS, WIZARD_NAMES, WIZARD_SURNAMES, 4);

//Робота с DOM (domService.js)

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/**
 * Функция, возвращающая ноду с волшебником
 * @param {object} wizard - волшебник
 * @returns {Node}
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

//Создание фрагмента документа
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

//Открытие блока с похожими персонажами
userDialog.querySelector('.setup-similar').classList.remove('hidden');












