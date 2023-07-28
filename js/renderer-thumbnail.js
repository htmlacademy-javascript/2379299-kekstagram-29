import { onThumbnailClick } from "./object-picture.js";

// Функция которая отрисовывает миниатюры
const rendererThumbnail = (thumbnailPictures) => {
  const thumbnailElementFragment = document.createDocumentFragment();
  // Контейнер для изображений от других пользователей
  const picturesContainer = document.querySelector('.pictures');
  // Шаблон изображения случайного пользователя
  const templatePicture = document.querySelector('#picture').content.querySelector('A');
  const filtersContainer = document.querySelector('.img-filters');
  filtersContainer.classList.remove('img-filters--inactive');

  thumbnailPictures.forEach(({url, description, likes, comments, id})=>{
    const thumbnailElement = templatePicture.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').id = id;
    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__img').alt = description;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent = comments.length;

    thumbnailElement.addEventListener('click', onThumbnailClick);

    thumbnailElementFragment.appendChild(thumbnailElement);
  });

  picturesContainer.appendChild(thumbnailElementFragment);

};

export {rendererThumbnail};


