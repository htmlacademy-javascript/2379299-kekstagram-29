import {debounce} from './util.js';

const COUNT_IMG = 10;
const RERENDER_DELAY = 500;
const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');

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

const removeAllImages = () => {
  const allImg = document.querySelectorAll('a.picture');
  allImg.forEach((img) => {
    img.remove();
  });
};

const removeFilters = () =>{
  const filterButtons = document.querySelectorAll('.img-filters__button');
  filterButtons.forEach((button) => button.classList.remove('img-filters__button--active')
  );
};

const onDefaultsClick = (data, cb) => () => {
  removeAllImages();
  removeFilters();
  buttonFilterDefault.classList.add('img-filters__button--active');
  cb(data);
};

const setRandomClick = (data, cb) => {
  let dataRandom; // Объявляем dataRandom здесь, чтобы его можно было использовать внутри обеих функций
  const renderDataRandom = () => {
    dataRandom = getRandomElements(data, COUNT_IMG);
    removeAllImages();
    cb(dataRandom);
  };

  const debouncedRender = debounce(renderDataRandom, RERENDER_DELAY);

  const onRandomClick = () => {
    debouncedRender();
    removeFilters();
    buttonFilterRandom.classList.add('img-filters__button--active');
  };

  buttonFilterRandom.addEventListener('click', onRandomClick);
};

const onDiscussedClick = (data, cb) => () => {
  removeFilters();
  removeAllImages();
  buttonFilterDiscussed.classList.add('img-filters__button--active');
  const result = [...data].sort((a, b) => {
    if (b.comments.length > a.comments.length) {
      return 1;
    }
    if (b.comments.length < a.comments.length) {
      return -1;
    }
    return 0;
  });
  cb(result);
};

const setDefaultsClick = (data, cb) => {
  buttonFilterDefault.addEventListener('click', onDefaultsClick(data, cb));
};

const setDiscussedClick = (data, cb) => {
  buttonFilterDiscussed.addEventListener('click', onDiscussedClick(data, cb));
};

export {setDefaultsClick, setRandomClick, setDiscussedClick};
