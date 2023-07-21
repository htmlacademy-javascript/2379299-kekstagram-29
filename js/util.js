//Генерация рандомного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Генерация рандомного числа из массива
const getRandomElementArray = (x) => x[getRandomInteger(0, x.length - 1)];

//Генерация рандомного числа и проверка его уникальности
function getUniq(min, max){
  const previousValues = [];
  return function (){
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return 'NAN';
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
}

export{getRandomInteger, getRandomElementArray, getUniq};
