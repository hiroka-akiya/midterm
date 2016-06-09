function canvasApp() {

  var pointImage = new Image();
  pointImage.src = 'point.png';

  function drawScreen() {
    context.fillStyle = '#EEE';
    context.fillRect(0, 0, theCanvas.width, theCanvas.height);

    // ボックス
    context.strokeStyle = '#000';
    context.strokeRect(1, 1, theCanvas.width - 2, theCanvas.height - 2);

    // ボール
    if (moves > 0) {
      moves--;
      ball.x += xunits;
      ball.y += yunits;
    }

    // 経路の点線
    // 配列に入っている位置を毎回全部レンダーする
    points.push({x:ball.x, y:ball.y});
    for (var i = 0; i < points.length; i++) {
      context.drawImage(pointImage, points[i].x, points[i].y, 1, 1);
    }

    context.fillStyle = '#000';
    context.beginPath();
    context.arc(ball.x, ball.y, 15, 0, Math.PI * 2, true);
    context.fill();

  }

  var theCanvas = document.getElementById('canvasOne'),
      context   =  theCanvas.getContext('2d'),
      speed     = 5,
      // 開始地点
      p1 = { x:20,  y:0 },
      // 終了地点
      p2 = { x:480, y:250 },
      dx = p2.x - p1.x,
      dy = p2.y - p1.y,
      // 直線距離
      distance = Math.sqrt(dx * dx + dy * dy),
      // スピードのペースで開始地点から終了地点まで移動させるには、
      // 何回の動きが必要か求める
      moves = distance / speed,
      // xとyをどれだけ変化させればよいのかを求める
      xunits = (p2.x - p1.x) / moves,
      yunits = (p2.y - p1.y) / moves,
      ball   = {x:p1.x, y:p1.y},
      // canvasに描く一連の点を保持する配列
      points = [];

  setInterval(drawScreen, 33);

}