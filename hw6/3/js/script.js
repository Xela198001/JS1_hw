var src = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'];
var wrap = document.getElementById('wrap');
var img = wrap.getElementsByClassName('img');
var div_img = document.querySelector('.wrap .img-mini');

for (var i = 0; i < src.length; i++) {
var item = document.createElement('img');
// console.log(item);
div_img.appendChild(item);
  item.classList.add('img-mini');
  item.style.width = '50px';
  item.style.margin = '0 5px 0 5px';
  item.src = `img/${src[i]}`;
  item.onclick = clickImg;
}

var i = 0;

function clickImg(event) {

  let img_mini = document.querySelector('.wrap .img-mini');
  img[0].src = event.target.src;
  console.log(event);
}

function next(id) {

  if (id == 1) {
    if (i == src.length) {
      i = 0;
    }
    div_img.children[i == 0 ? src.length - 1 : i - 1].style.border = 'none';
    div_img.children[i == 0 ? src.length - 1 : i - 1].style.boxShadow = 'none';
    img[0].src = `img/${src[i]}`;
    div_img.children[i].style.border = '1px solid #5C6BC0';
    div_img.children[i].style.boxShadow = '0 0 4px 0px #5C6BC0';
    console.log(div_img.children[i]);
    i++;
  }
  if (id == 0) {
    if (i == -1) {
      i = src.length-1;
    }
    div_img.children[i == src.length - 1 ? 0 : i + 1].style.border = 'none';
    div_img.children[i == src.length - 1 ? 0 : i + 1].style.boxShadow = 'none';
    img[0].src = `img/${src[i]}`;
    div_img.children[i].style.border = '1px solid #5C6BC0';
    div_img.children[i].style.boxShadow = '0 0 4px 0px #5C6BC0';
    console.log(div_img.children[i]);
    i--;
  }
  // img = document.getElementById('img')
  // console.log(i);
}

// console.log(div_img);
// img.src = src[0];