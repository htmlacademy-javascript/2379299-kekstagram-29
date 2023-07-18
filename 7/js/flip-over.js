// Функция для проверки, является ли строка палиндромом.
const flipOver = function(str){
  let palindrome = '';
  for(let i = str.length - 1; i >= 0; i--){
    palindrome += str[i];
  }

  return str.toLowerCase().replaceAll(' ', '') === palindrome.toLowerCase().replaceAll(' ', '');
};

export {flipOver};
