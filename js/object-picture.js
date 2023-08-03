import {getCurrentThumbnailData} from './get-data-current-thumbnail.js';
import {loadingComments, rendererBigPicture} from './renderer-big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const buttonLoadComments = document.querySelector('.comments-loader');
const buttonClose = document.querySelector('.big-picture__cancel');

let currentPictureData = null;

const onLoadComments = () => {
  loadingComments(currentPictureData);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonLoadComments.removeEventListener('click', onLoadComments);
  document.removeEventListener('keydown', onEscapeKeyPress);
  buttonClose.removeEventListener('click', onButtonCloseClick);
  currentPictureData = null;
};

const onEscapeKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
};

const onButtonCloseClick = () => {
  closeModal();
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const onThumbnailClick = (evt) => {
  evt.preventDefault();
  openModal();
  const data = getCurrentThumbnailData(evt.target.id)[0];
  currentPictureData = rendererBigPicture(data);
  loadingComments(currentPictureData);
  buttonLoadComments.addEventListener('click', onLoadComments);
  document.addEventListener('keydown', onEscapeKeyPress);
  buttonClose.addEventListener('click', onButtonCloseClick);
};

export {onThumbnailClick};
