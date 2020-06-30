var a, str='',object='';
a = parseInt(prompt('Введите число от 0 до 999'));
str = String(a).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

if ((a>=0) && (a <=999)) { 
  object = {
    hundreds: str.charAt(0),
    decaes: str.charAt(1),
    units: str.charAt(2)
  }
  document.write('сотни: ' + object.hundreds + ', десятки: ' + object.decaes + ', единицы: ' + object.units);
  console.log(object);
}
else {
  alert('Введенное число вн диапазона 0..999.');
  console.log(object);
  
}