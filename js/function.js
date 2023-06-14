// Функция для проверки длины строки.
const checkingLength = function (str, maxLength){
  return str.length <= maxLength;
};

checkingLength('Строка', 20);

// Функция для проверки, является ли строка палиндромом.
const flipOver = function(str){
  let palindrome = '';
  for(let i = str.length - 1; i >= 0; i--){
    palindrome += str[i];
  }

  return str.toLowerCase().replaceAll(' ', '') === palindrome.toLowerCase().replaceAll(' ', '');
};

flipOver('Лёша на полке клопа нашёл ');

// Функция которая возвращает целые  числа.
const takeNumber = function(num){
  let numAll = '';
  const newnum = String(num);
  for (let i = 0; i <= newnum.length - 1; i++){
    if (!isNaN(newnum[i])){
      numAll += newnum[i].replaceAll(' ', '');
    }
  }

  return parseInt(numAll, 10);
};

takeNumber(2023);
