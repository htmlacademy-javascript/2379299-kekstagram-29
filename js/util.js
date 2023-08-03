import {onEscKeydownListener} from './user-form.js';

const ALERT_SHOW_TIME = 5000;
const templateErrorAlert = document.querySelector('#error').content.querySelector('.error');
const templateSuccessAlert = document.querySelector('#success').content.querySelector('.success');

const showMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showAlert = (parent) => {
  const thumbnailElement = parent.cloneNode(true);
  document.body.append(thumbnailElement);
  const button = thumbnailElement.querySelector('button');
  const Inner = thumbnailElement.querySelector('div');
  const successTitle = thumbnailElement.querySelector ('h2');

  const onButtonCloseClick = (evt) => {
    if (evt.target !== Inner && evt.target !== successTitle) {
      thumbnailElement.remove();
    }
    if(parent === templateSuccessAlert){
      thumbnailElement.remove();
      document.querySelector('.img-upload__preview').style.transform = '';
      document.querySelector('.effect-level__slider').noUiSlider.reset();
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
    }
    cleanEvents();
  };
  const onEscapeKeyPress = (evt) => {
    if (evt.key === 'Escape' && parent === templateSuccessAlert) {
      thumbnailElement.remove();
      document.querySelector('.img-upload__preview').style.transform = '';
      // document.querySelector('.effect-level__slider').noUiSlider.reset();
    }

    thumbnailElement.remove();
    cleanEvents();

    if (parent !== templateSuccessAlert) {
      document.addEventListener('keydown', onEscKeydownListener);
    }
  };

  const cleanEvents = () => {
    document.removeEventListener('click', onButtonCloseClick);
    document.removeEventListener('keydown', onEscapeKeyPress);
  };

  button.addEventListener('click', () => {
    if(parent === templateSuccessAlert){
      thumbnailElement.remove();
      document.querySelector('.img-upload__preview').style.transform = '';
      document.querySelector('.effect-level__slider').noUiSlider.reset();
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
    }
  }, {once: true});

  document.addEventListener('click', onButtonCloseClick);
  document.addEventListener('keydown', onEscapeKeyPress);
};

const showError = () => showAlert(templateErrorAlert);

const showSuccess = () => showAlert(templateSuccessAlert);

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {showError, showSuccess, showMessage, debounce};
