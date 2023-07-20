//Функция которая получает текущий ID из миниатюры
import {getDataСurrentThumbnail} from './get-data-current-thumbnail.js';
//Функция которая вставляет данные из миниатюры в большую картинку
import {rendererBigPicture} from './renderer-big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const picturesContainer = document.querySelector('.pictures');
const bigPictureSocial = document.querySelector('.big-picture__social');

const closeModal = (modal) => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  
};

const openModal = (modal) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPictureSocial.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureSocial.querySelector('.comments-loader').classList.add('hidden');
};

const onThumbnailClick = (evt) => {

  if (evt.target.nodeName === 'IMG'){
    // evt.preventDefault();!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    openModal(bigPicture);

  }
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

// Функция которая отрисовывает большие картинки вставляя в них данные
picturesContainer.addEventListener('click', onThumbnailClick);

