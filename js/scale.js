const SCALE = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const battonSmaller = document.querySelector('.scale__control--smaller');
const battonBigger = document.querySelector('.scale__control--bigger');
const inputSizePicture = document.querySelector('.scale__control--value');
const SizePicture = document.querySelector('.img-upload__preview');

const updateImageSize = (data) => {
  const currentValue = parseInt(inputSizePicture.value, 10);
  if(data === 'smaller' && currentValue > SCALE.MIN) {
    inputSizePicture.value = `${currentValue - SCALE.STEP}%`;
  }
  if(data === 'bigger' && currentValue < SCALE.MAX) {
    inputSizePicture.value = `${currentValue + SCALE.STEP}%`;
  }
  SizePicture.style.transform = `scale(${parseInt(inputSizePicture.value, 10) * 0.01})`;
};

const onSmallerClick = () => {
  updateImageSize('smaller');
};

const onBiggerClick = () => {
  updateImageSize('bigger');
};

battonSmaller.addEventListener('click', onSmallerClick);
battonBigger.addEventListener('click', onBiggerClick);
