// Функция которая возвращает целые числа.
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

export{takeNumber};
