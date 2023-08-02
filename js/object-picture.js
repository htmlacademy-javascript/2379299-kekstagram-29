import {getCurrentThumbnailData} from './get-data-current-thumbnail.js';
import {loadingComments, rendererBigPicture} from './renderer-big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const buttonLoadComments = document.querySelector('.comments-loader');
let currentPictureData = null;

const onLoadComments = () => {
  loadingComments(currentPictureData);
};

const closeModal = (modal) => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonLoadComments.removeEventListener('click', onLoadComments);
  currentPictureData = null;
};

const openModal = (modal) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

};

const onThumbnailClick = (evt) => {
  evt.preventDefault();
  openModal(bigPicture);
  const data = getCurrentThumbnailData(evt.target.id)[0];
  currentPictureData = rendererBigPicture(data);
  loadingComments(currentPictureData);
  buttonLoadComments.addEventListener('click', onLoadComments);
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
