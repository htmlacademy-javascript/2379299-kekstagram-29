const ALERT_SHOW_TIME = 5000;

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

const templateErrorAlert = document.querySelector('#error').content.querySelector('.error');
const templateSuccessAlert = document.querySelector('#success').content.querySelector('.success');


const showAlert = (xxx) => {
  const thumbnailElement = xxx.cloneNode(true);
  document.body.append(thumbnailElement);
  const button = thumbnailElement.querySelector('button');
  const Inner = thumbnailElement.querySelector('div');

  button.addEventListener('click', () => {
    thumbnailElement.remove();
  });

  document.addEventListener('click', (evt) => {
    if (evt.target !== Inner) {
      thumbnailElement.remove();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      thumbnailElement.remove();
    }
  });
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
