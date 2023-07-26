
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
    //
    cb(data);
  });
};

export {setDefaultsClick, setRandomClick, setDiscussedClick};


