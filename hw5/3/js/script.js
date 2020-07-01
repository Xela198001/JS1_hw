// var src = ['1,jpg', '2.jpg', '3.jpg'];
var wrap = document.getElementById('wrap');
var img = wrap.getElementsByClassName('img');
// img.a = '3.jpg';
// var a = document.createElement("a");
// wrap.appendChild("a");
// a.classList('pre');
var i = 1;
function next(id) {

  if (id == 1) {
    if (i == 3) {
      i = 0;
    }
    img[0].src = `img/${++i}.jpg`;
  }
  if (id == 0) {
    if (i == 1) {
      i = 4;
    }
    img[0].src = `img/${--i}.jpg`;
  }
  // img = document.getElementById('img')
  console.log(i);
}

console.log(i);
// img.src = src[0];