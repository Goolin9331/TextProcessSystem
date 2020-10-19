//获取内容
var n = 10;
setInterval(function () {
  if (n > 19) n = 10;
     document.getElementById("pics").innerHTML = "<img src='image/" + n + ".jpg'/>";
  n++;
}, 1000);

var i = 1;
setInterval(function () {
  if (i > 11) i = 1;
  document.getElementById("picture").innerHTML = "<img src='image/" + i + ".jpg'/>";
  i++;
}, 500)