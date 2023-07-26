const COUNT_IMG = 10;
 // Контейнер для изображений от других пользователей
 const picturesContainer = document.querySelector('.pictures');


function getRandomElements(arr, count) {
  let shuffled = [...arr];
  let i = arr.length;
  let min = i - count > 0 ? i - count : 0;

  while (i-- > min) {
    let index = Math.floor((i + 1) * Math.random());
    let temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(min);
}



const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');


const setDefaultsClick = (data, cb) => {
  buttonFilterDefault.addEventListener('click', () => {
    const allImg = document.querySelectorAll('a.picture');
    allImg.forEach((img) => {
      img.remove();
    });
    cb(data);
  });
};

const setRandomClick = (data, cb) => {
  buttonFilterRandom.addEventListener('click', () => {
    let dataRandom = getRandomElements(data, COUNT_IMG);
    const allImg = document.querySelectorAll('a.picture');
    allImg.forEach((img) => {
      img.remove();
    });
    cb(dataRandom);
  });
};

const setDiscussedClick = (data, cb) => {
  buttonFilterDiscussed.addEventListener('click', () => {
    const result = data.sort((a, b) => {
      if (b.comments.length > a.comments.length) {
        return 1;
      }
      if (b.comments.length < a.comments.length) {
        return -1;
      }
      return 0;
    });
    const allImg = document.querySelectorAll('a.picture');
    allImg.forEach((img) => {
      img.remove();
    });
    cb(result);
  });
};

export {setDefaultsClick, setRandomClick, setDiscussedClick};


