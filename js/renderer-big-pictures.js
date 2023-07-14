const bigPicture = document.querySelector('.big-picture');
const bigPictureSocial = document.querySelector('.big-picture__social');
const picturesContainer = document.querySelector('.pictures');


const onThumbnailClick = (evt)=>{
  const currentThumbnail = evt.target.parentNode;
  if (evt.target.nodeName === 'IMG'){
    bigPicture.classList.remove('hidden');
    const imgThumbnail = currentThumbnail.querySelector('.picture__img').src;
    const infoThumbnail = currentThumbnail.querySelector('.picture__img').alt;
    const commentsThumbnail = currentThumbnail.querySelector('.picture__comments').textContent;
    const likeshumbnail = currentThumbnail.querySelector('.picture__likes').textContent;

    bigPicture.querySelector ('.big-picture__img').children[0].src = imgThumbnail;
    bigPictureSocial.querySelector ('.likes-count').textContent = likeshumbnail;
    bigPictureSocial.querySelector ('.social__caption').textContent = infoThumbnail;
    bigPicture.querySelector ('.comments-count').textContent = commentsThumbnail;
  }
};

picturesContainer.addEventListener('click',onThumbnailClick);


const rendererBigPicture = picturesContainer.addEventListener('click',onThumbnailClick);


export {rendererBigPicture};
