'use strict';

(function () {
  var wizards = [];

  window.createWizards = function (coatColors, eyesColors, wizardNames, wizardSurnames, quantity) {
    for (var i = 0; i < quantity; i++) {
      wizards[i] = {
        name: window.utils.genrRandom(wizardNames) + ' ' + window.utils.genrRandom(wizardSurnames),
        coatColor: window.utils.genrRandom(coatColors),
        eyesColor: window.utils.genrRandom(eyesColors)
      };
    }

    return wizards;
  };
})();
