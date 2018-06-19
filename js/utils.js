'use strict';
// Вспомогательные функции
(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  window.utils = {
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    genrRandom: function (array) {
      var index = window.utils.getRandomInt(0, array.length - 1);
      var randomValue = array[index];

      return randomValue;
    },
    clearBlock: function (block) {
      while (block.firstChild) {
        block.removeChild(block.firstChild);
      }
    },
    getMaxElement: function (arr) {
      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      return maxElement;
    },
    isEscPressed: function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        return true;
      }

      return false;
    },
    isEnterPressed: function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        return true;
      }

      return false;
    }
  };
})();

