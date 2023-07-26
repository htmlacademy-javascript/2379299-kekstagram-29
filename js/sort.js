

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



getUniq()











const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');


const setDefaultsClick = (data, cb) => {
  buttonFilterDefault.addEventListener('click', () => {
    // filter
    cb(data);
  });
};

const setRandomClick = (data, cb) => {
  buttonFilterRandom.addEventListener('click', () => {
    // filter
    cb(data);
  });
};

const setDiscussedClick = (data, cb) => {
  buttonFilterDiscussed.addEventListener('click', () => {
    console.log(data)
    cb(data);
  });
};

export {setDefaultsClick, setRandomClick, setDiscussedClick};


