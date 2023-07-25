
import {sendData} from './api.js';
// import {showAlertError} from './util.js';
import {showError, showSuccess} from './util.js';
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const imageInput = document.querySelector('.img-upload__form');
const formForPicture = document.querySelector('.img-upload__overlay');
const buttonClose = document.querySelector('.img-upload__cancel');
const hashtagsInput = formForPicture.querySelector('.text__hashtags');
const submitButton = formForPicture.querySelector('.img-upload__submit');
//перенести потом в другой модуль imageInput.reset(); 2
const closeModal = (modal) => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageInput.reset();
};
//перенести потом в другой модуль
buttonClose.addEventListener('click', () => {
  closeModal(formForPicture);
  imageInput.reset();
});
//перенести потом в другой модуль
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && document.activeElement !== hashtagsInput) {
    closeModal(formForPicture);
    imageInput.reset();
  }
});

const pristine = new Pristine(imageInput, {
  classTo: 'img-upload__field-wrapper', // Элемент, на который будут добавляться классы
  errorTextParent: 'img-upload__field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
  errorTextClass: 'img-upload__field-wrapper__error' // Класс для элемента с текстом ошибки
});

// const arrayText
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
//Функция прогоняет поле inpun через регулярное выражение
const hashtagsLength = (value) => hashtag.test(value);

pristine.addValidator(
  hashtagsInput,
  (value) => value.trim().split(' ').every(hashtagsLength),
  'Xэш-тег должен начинаться с символа # и быть длинной от 2 до 20 символов'
);

pristine.addValidator(
  hashtagsInput,
  (value) => value.trim().split(' ').length < 5,
  'допустимое количество хэш-тегов 5'
);

pristine.addValidator(
  hashtagsInput,
  (value) =>{
    const arr = value.trim().split(' ');
    return arr.length === new Set(arr).size;
  },
  'Xэш-теги должны быть уникальны'
);

imageInput.addEventListener('change', () => {
  formForPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  pristine.validate();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess) => {
  imageInput.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          onSuccess(formForPicture);
          showSuccess();
        })
        .catch(() => {
          showError();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export {setUserFormSubmit};
export {closeModal};


