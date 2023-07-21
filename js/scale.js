const SCALE = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};


const battonSmaller = document.querySelector('.scale__control--smaller');//Кнопка при нажатии на которую должен уменьшаться масштаб изображения
const battonBigger = document.querySelector('.scale__control--bigger');//Кнопка при нажатии на которую должен увеличиваться масштаб изображения
const inputSizePicture = document.querySelector('.scale__control--value');//Поле c размером изображения
const SizePicture = document.querySelector('.img-upload__preview');


battonSmaller.addEventListener('click', () => {
  if (parseInt(inputSizePicture.value) > SCALE.MIN){
    inputSizePicture.value = (parseInt(inputSizePicture.value) - SCALE.STEP) + '%'
    SizePicture.style.transform = `scale(${parseInt(inputSizePicture.value) * 0.01})`;

  }
});

battonBigger.addEventListener('click', () => {
  if (parseInt(inputSizePicture.value) < SCALE.MAX){
    inputSizePicture.value = (parseInt(inputSizePicture.value) + SCALE.STEP) + '%'
    SizePicture.style.transform = `scale(${parseInt(inputSizePicture.value) * 0.01})`;
  }
});


