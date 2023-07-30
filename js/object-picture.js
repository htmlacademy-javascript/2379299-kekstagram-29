//Функция которая получает текущий ID из миниатюры
import {getDataСurrentThumbnail} from './get-data-current-thumbnail.js';
//Функция которая вставляет данные из миниатюры в большую картинку
import {loadingComments, rendererBigPicture} from './renderer-big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const buttonLoadComments = document.querySelector('.comments-loader');
let currentModalData = null;

const loadCommentsListener = () => {
  loadingComments(currentModalData);
};


const closeModal = (modal) => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonLoadComments.removeEventListener('click', loadCommentsListener);
  currentModalData = null;
};

const openModal = (modal) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

};

const onThumbnailClick = (evt) => {

  evt.preventDefault();
  openModal(bigPicture);
  const data = getDataСurrentThumbnail(evt.target.id)[0];
  currentModalData = rendererBigPicture(data);
  loadingComments(currentModalData);
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
