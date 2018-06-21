'use strict';

(function () {
  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), closePopup, onError);
    evt.preventDefault();
  });

  var userDialog = document.querySelector('.setup');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var setupOpenBlock = document.querySelector('.setup-open');
  setupOpenBlock.addEventListener('click', openPopup);

  var setupOpenIcon = setupOpenBlock.querySelector('.setup-open-icon');
  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterPressed(evt)) {
      openPopup();
    }
  });

  var setupCloseBlock = document.querySelector('.setup-close');
  setupCloseBlock.addEventListener('click', closePopup);
  setupCloseBlock.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterPressed(evt)) {
      closePopup();
    }
  });

  var startCoords;

  function openPopup() {
    userDialog.classList.remove('hidden');

    startCoords = {
      x: userDialog.style.left,
      y: userDialog.style.top
    };

    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    userDialog.classList.add('hidden');

    userDialog.style.left = startCoords.x;
    userDialog.style.top = startCoords.y;

    document.removeEventListener('keydown', onPopupEscPress);
  }

  function onPopupEscPress(evt) {
    if (window.utils.isEscPressed(evt)) {
      closePopup();
    }
  }

  function onError(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; paddong: 50px;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }
})();

