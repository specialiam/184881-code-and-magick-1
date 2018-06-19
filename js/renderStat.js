'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 20;
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + 1.5 * FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + 2.5 * FONT_GAP);

    var maxTime = window.utils.colorgetMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255,0,0,1)';
      } else {
        ctx.fillStyle = 'rgba(0,0,' + window.utils.colorgetRandomInt(100, 255) + ',1)';
      }
      ctx.fillRect(CLOUD_X + FONT_GAP + GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - currentBarHeight - FONT_GAP, BAR_WIDTH, currentBarHeight);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - currentBarHeight - GAP - FONT_GAP);
      ctx.fillText(players[i], CLOUD_X + FONT_GAP + GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_Y + CLOUD_HEIGHT - GAP);
    }
  };
})();
