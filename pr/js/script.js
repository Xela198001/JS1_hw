let main = document.querySelector('.main');
let content = {
  1: 'Контент - 1',
  2: 'Контент - 2',
  3: 'Контент - 3',
  4: 'Контент - 4',
  5: 'Контент - 5',
  6: 'Контент - 6',
  7: 'Контент - 7',
  8: 'Контент - 8',
  9: 'Контент - 9',
  10: 'Контент - 10',
    
}

function add() {
  for (let i = 1; i <= 10; i++) {
    let item = document.createElement('div');

    item.innerHTML = `Item - ${i}`;
    // item.style.width = '50px';
    item.style.height = '50px';
    item.style.cursor = 'pointer';
    item.style.flexGrow = `1`;
    if ( i % 2 != 0) {
      item.style.backgroundColor = '#7986cb';
    } else {
      item.style.backgroundColor = '#d1c4e9';
    }


    item.classList.add(`item`)
    item.classList.add(`item__${i}`)



    item.onclick = function () {
      var div = document.querySelector('.div');
      div.innerHTML = `${content[i]}`;
    }

    main.appendChild(item);
  }

  let item = document.createElement('div');
  item.classList.add('div');
  main.appendChild(item);
}


window.onload = add;



