// Функция которая отрисовывает миниатюры
const thumbnailRenderer = (thumbnailPictures) => {
  const thumbnailElementFragment = document.createDocumentFragment();
  // Контейнер для изображений от других пользователей
  const picturesContainer = document.querySelector('.pictures');
  // Шаблон изображения случайного пользователя
  const templatePicture = document.querySelector('#picture').content.querySelector('a');

  thumbnailPictures.forEach(({url, description, likes, comments})=>{
    const thumbnailElement = templatePicture.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__img').alt = description;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
    thumbnailElementFragment.appendChild(thumbnailElement);
  });

  picturesContainer.appendChild(thumbnailElementFragment);
};

export {thumbnailRenderer};


