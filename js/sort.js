import {debounce} from './util.js';

const COUNT_IMG = 10;

function getRandomElements(arr, count) {
  const shuffled = [...arr];
  let i = arr.length;
  const min = i - count > 0 ? i - count : 0;

  while (i-- > min) {
    const index = Math.floor((i + 1) * Math.random());
    const temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(min);
}

const RERENDER_DELAY = 500;

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
  let dataRandom; // Объявляем dataRandom здесь, чтобы его можно было использовать внутри обеих функций

  const renderDataRandom = () => {
    dataRandom = getRandomElements(data, COUNT_IMG);
    const allImg = document.querySelectorAll('a.picture');
    allImg.forEach((img) => {
      img.remove();
    });
    cb(dataRandom);
  };

  const debouncedRender = debounce(renderDataRandom, RERENDER_DELAY);

  buttonFilterRandom.addEventListener('click', () => {
    debouncedRender();
  });
};

const setDiscussedClick = (data, cb) => {
  buttonFilterDiscussed.addEventListener('click', () => {
    const result = [...data].sort((a, b) => {
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


