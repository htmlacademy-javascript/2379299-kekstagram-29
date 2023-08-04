const COUNT_IMG = 10;

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

const removeFilters = () => {
  const filterButtons = document.querySelectorAll('.img-filters__button');
  filterButtons.forEach((button) => button.classList.remove('img-filters__button--active')
  );
};

const onDefaultsClick = (data, cb) => {
  removeFilters();
  buttonFilterDefault.classList.add('img-filters__button--active');
  cb(data);
};

const onRandomClick = (data, cb) => {
  removeFilters();
  buttonFilterRandom.classList.add('img-filters__button--active');
  const result = getRandomElements(data, COUNT_IMG);
  cb(result);
};

const onDiscussedClick = (data, cb) => {
  removeFilters();
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
  buttonFilterDefault.addEventListener('click', () => {
    onDefaultsClick(data, cb);
  });
};

const setDiscussedClick = (data, cb) => {
  buttonFilterDiscussed.addEventListener('click', () => {
    onDiscussedClick(data, cb);
  });
};

const setRandomClick = (data, cb) => {
  buttonFilterRandom.addEventListener('click', () => {
    onRandomClick(data, cb);
  });
};

export {setDefaultsClick, setRandomClick, setDiscussedClick};
