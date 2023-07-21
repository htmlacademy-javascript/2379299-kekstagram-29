// Объект с настройками для каждого эффекта
const effects = {
  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
  },
  sepia: {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
  },
  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
  },
  phobos: {
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
  },
  heat: {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const valueEffect = document.querySelector('.effect-level__value');//Уровень эффекта записываем значение слайдера
const imgPreview = document.querySelector('.img-upload__preview');//Изображение на которое накладываются фильтры
const sliderElement = document.querySelector('.effect-level__slider');//Cлайдер

noUiSlider.create(sliderElement, {

  range:{
    min: 0,
    max: 1,
  },
  start: 0.5,
  step: 0.1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueEffect.value = sliderElement.noUiSlider.get();
  // imgPreview.style.filter = `grayscale(valueEffect.value)`         `scale(${parseInt(inputSizePicture.value) * 0.01})`;
  console.log('111111', valueEffect.value);
});


