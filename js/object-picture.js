//Функция которая получает текущий ID из миниатюры
import {getDataСurrentThumbnail} from './get-data-current-thumbnail.js';
//Функция которая вставляет данные из миниатюры в большую картинку
import {loadingComments, rendererBigPicture} from './renderer-big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const buttonLoadComments = document.querySelector('.comments-loader');
let currentPictureData = null;

const loadCommentsListener = () => {
  loadingComments(currentPictureData);
};

const closeModal = (modal) => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonLoadComments.removeEventListener('click', loadCommentsListener);
  currentPictureData = null;
};

const openModal = (modal) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

};

const onThumbnailClick = (evt) => {
  evt.preventDefault();
  openModal(bigPicture);
  const data = getDataСurrentThumbnail(evt.target.id)[0];
  currentPictureData = rendererBigPicture(data);
  loadingComments(currentPictureData);
  buttonLoadComments.addEventListener('click', loadCommentsListener);
};

const buttonClose = document.querySelector('.big-picture__cancel');
buttonClose.addEventListener('click', () => {
  closeModal(bigPicture);
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModal(bigPicture);
  }
});

export {onThumbnailClick};
