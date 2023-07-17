//Функция которая получает данные из текущей миниатюры
import {getDataСurrentThumbnail} from './get-data-current-thumbnail.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureSocial = document.querySelector('.big-picture__social');
const picturesContainer = document.querySelector('.pictures');
const socialComments = document.querySelector('.social__comments');

// Контейнер для коментарий от других пользователей
const commentsContainer = document.querySelector('.social__comments');
// Функция которая подставляет в большую картинку данные из миниатюры
const onThumbnailClick = (evt) => {
  if (evt.target.nodeName === 'IMG'){
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    // showModal()
    const data = getDataСurrentThumbnail(evt.target.id);
    const dataComments = data[0].comments;
    bigPictureSocial.querySelector('.social__comment-count').classList.add('hidden');
    bigPictureSocial.querySelector('.comments-loader').classList.add('hidden');

    data.forEach(({url,likes, description, comments}) => {
      bigPicture.querySelector ('.big-picture__img').children[0].src = url;
      bigPictureSocial.querySelector ('.likes-count').textContent = likes;
      bigPictureSocial.querySelector ('.social__caption').textContent = description;
      bigPicture.querySelector ('.comments-count').textContent = comments.length;
      // Шаблон для коментарий от других пользователей
      const templateComments = document.querySelector('.social__comment');
      const thumbnailElementFragmentComment = document.createDocumentFragment();
      // const thumbnailElementFragmentComment = createComments(dataComments);
      dataComments.forEach(({avatar, message, name}) => {
        const comment = templateComments.cloneNode(true);
        comment.querySelector('.social__picture').alt = name;
        comment.querySelector('.social__picture').src = avatar;
        comment.querySelector('.social__text').textContent = message;
        thumbnailElementFragmentComment.appendChild(comment);
      });
      commentsContainer.innerHTML = '';
      commentsContainer.appendChild(thumbnailElementFragmentComment);
    });

    socialComments.querySelector ('.social__picture').src = data[0].comments[0].avatar;
  }
};
// Функция которая отрисовывает большие картинки
const rendererBigPicture = picturesContainer.addEventListener('click', onThumbnailClick);

const buttonClose = document.querySelector('.big-picture__cancel');
buttonClose.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});


document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});


export {rendererBigPicture};
