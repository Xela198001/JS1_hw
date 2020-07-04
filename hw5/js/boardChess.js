
var board = document.querySelector(".boardChess");
var i = 0, count = 0, letter = false;
var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
  numbers = ['', 8, 7, 6, 5, 4, 3, 2, 1, ''],
  lettersCellTop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  lettersCellBottom = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
  numbersCellLeft = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
  numbersCellRight = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99], 
  blackFigs = ['', '&#9820;', '&#9822;', '&#9821;', '&#9818;', '&#9819;', '&#9821;', '&#9822;', '&#9820;', ''],
  whiteFigs = ['', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', ''];

while (count < 10 * 10) {
  var item = document.createElement('div');
  board.appendChild(item);

  item.classList.add('item');
  // item.innerHTML = count;


  // if (letter) {
  //   item.innerHTML = letters[i];
  //   item.style.transform = 'rotate(180deg)';
  // }
  
  if (i && i % 2) {
    item.classList.add('black')
    item.style.backgroundColor = "#fb8c00";
  } else {
      item.classList.add('white')
    item.style.backgroundColor = "#fff";
  }
   
  i += ((i + 2) % 11) ? 1 : 2;

  for (j = 0; j < 10; j++) {
    if (count == lettersCellTop[j]) {
      item.innerHTML = letters[j];
      item.style.transform = 'rotate(180deg)';
      item.style.padding = '12px';
      if (j !== 0 || j !== 9) {
        item.style.borderTop = '1px solid #111';
        item.style.backgroundColor = "#e5e5e5";
      }
    }
    if (count == lettersCellBottom[j]) {
      item.innerHTML = letters[j];
      item.style.padding = '12px';
      if (j !== 0 || j != 9) {
        item.style.borderTop = '1px solid #111';
        item.style.backgroundColor = "#e5e5e5";
      }
    }
    if (count == numbersCellLeft[j]) {
      item.innerHTML = numbers[j];
      item.style.padding = '12px';
      if (j !== 0 || j != 9) {
        item.style.borderRight = '1px solid #111';
        item.style.backgroundColor = "#e5e5e5";
      }
    }
    if (count == numbersCellRight[j]) {
      item.innerHTML = numbers[j];
      item.style.padding = '12px';
      item.style.transform = 'rotate(180deg)';
      if (j !== 0 || j != 9) {
        item.style.borderRight = '1px solid #111';
        item.style.backgroundColor = "#e5e5e5";
      }
    }
    if (count == 0 || count == 9 || count == 90 || count == 99) {
      item.style.border = 'none';
    }

    if (count == parseInt('1' + lettersCellTop[j]) && count !== 19) {
      item.innerHTML = blackFigs[j];
      item.style.paddingTop = '1.4%';
    }

    if (count == parseInt('2' + lettersCellTop[j]) && count !== 29) {
      item.innerHTML = '&#9823;';
      item.style.paddingTop = '1.4%';
    }
    if (count == parseInt('8' + lettersCellTop[j]) && count !== 89) {
      item.innerHTML = whiteFigs[j];
      item.style.paddingTop = '1.4%';
    }

    if (count == parseInt('7' + lettersCellTop[j]) && count !== 79) {
      item.innerHTML = '&#9817;';
      item.style.paddingTop = '1.4%';
    }
  }

  item.style.textAlign = 'center';
  item.style.width = '50px';
  item.style.height = '50px';
  item.style.fontSize = '24px'

  count++;
}
console.log(board);