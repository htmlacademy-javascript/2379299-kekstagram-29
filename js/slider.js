// Объект с настройками для каждого эффекта
const effects = {
  chrome: {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
};


const valueEffect = document.querySelector('.effect-level__value');//Уровень эффекта записываем значение слайдера
const imgPreview = document.querySelector('.img-upload__preview');//Изображение на которое накладываются фильтры
const sliderElement = document.querySelector('.effect-level__slider');//Cлайдер
const effectsList = document.querySelector('.effects__list');
const containerSlider = document.querySelector('.img-upload__effect-level');

noUiSlider.create(sliderElement, {

  range:{
    min: 0,
    max: 100,
  },
  start: 100,
  step: 0.01,
  connect: 'lower',

});

let effectName;

const onEffectsClick = (evt) => {
  if (evt.target.nodeName === 'SPAN'){
    const effectClass = evt.target.classList[1];
    effectName = effectClass.split('--')[1];

    if (effectName === 'none') {
      containerSlider.classList.add('hidden');
      sliderElement.noUiSlider.reset();
    } else {
      containerSlider.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: effects[effectName].min,
          max: effects[effectName].max,
        },
        step:effects[effectName].step,
        start:effects[effectName].max,
      });
    }
  }
};

sliderElement.noUiSlider.on('update', () => {
  valueEffect.value = sliderElement.noUiSlider.get();
  if(effectName && effects[effectName]) {
    imgPreview.style.filter = `${effects[effectName].name}(${valueEffect.value}${effects[effectName].unit})`;
  }

});

effectsList.addEventListener('click', onEffectsClick);
