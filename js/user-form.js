import {sendData} from './api.js';
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
const textDescription = formForPicture.querySelector('.text__description');

const cleanEvents = () => {
  buttonClose.removeEventListener('click', onButtonCloseClick);
  document.removeEventListener('keydown', onEscKeydownListener);
};

const closeModal = () => {
  formForPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageInput.reset();
  document.querySelector('.img-upload__preview').style.transform = '';
  document.querySelector('.effect-level__slider').noUiSlider.reset();
  document.querySelector('.img-upload__preview').style.filter = 'none';
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  cleanEvents();
};

function onButtonCloseClick() {
  closeModal();
}

function onEscKeydownListener(evt) {
  if (evt.key === 'Escape' && document.activeElement !== hashtagsInput && document.activeElement !== textDescription) {
    closeModal();
  }
}

const pristine = new Pristine(imageInput, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const hashtagsLength = (value) => hashtag.test(value);
const hashtagList = (value)=> value.trim().toLowerCase().replace(/ +/g, ' ').split(' ');
pristine.addValidator(
  hashtagsInput,
  (value) => {
    if (value === '') {
      return true;
    }
    return hashtagList(value).every(hashtagsLength);
  }
  ,
  'Xэш-тег должен начинаться с символа # и быть длинной от 2 до 20 символов'
);

pristine.addValidator(
  hashtagsInput,
  (value) => {
    if (value === '') {
      return true;
    }
    return hashtagList(value).length < 6;
  },
  'допустимое количество хэш-тегов 5'
);

pristine.addValidator(
  hashtagsInput,
  (value) =>{
    const arr = hashtagList(value);
    return arr.length === new Set(arr).size;
  },
  'Xэш-теги должны быть уникальны'
);

const onImageInputChange = () => {
  formForPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydownListener);
  buttonClose.addEventListener('click', onButtonCloseClick);
  pristine.validate();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(new FormData(evt.target))
      .then(() => {
        closeModal();
        showSuccess();
      })
      .catch(() => {
        document.removeEventListener('keydown', onEscKeydownListener);
        showError();
      })
      .finally(unblockSubmitButton);
  }
};

imageInput.addEventListener('change', onImageInputChange);
imageInput.addEventListener('submit', onFormSubmit);

export {closeModal, onEscKeydownListener};
