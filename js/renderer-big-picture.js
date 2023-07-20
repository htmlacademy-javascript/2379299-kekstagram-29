const bigPicture = document.querySelector('.big-picture');
const bigPictureSocial = document.querySelector('.big-picture__social');
const commentsContainer = document.querySelector('.social__comments');

const rendererBigPictureComments = (dataComments, thumbnailElementFragmentComment) => {
  const templateComments = document.querySelector('.social__comment');

  dataComments.forEach(({avatar, message, name}) => {
    const comment = templateComments.cloneNode(true);
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__text').textContent = message;

    thumbnailElementFragmentComment.appendChild(comment);
  });
};

const rendererBigPicture = (data) => {
  data.forEach(({url,likes, description, comments}) => {
    const thumbnailElementFragmentComment = document.createDocumentFragment();
    bigPicture.querySelector ('.big-picture__img').children[0].src = url;
    bigPictureSocial.querySelector ('.likes-count').textContent = likes;
    bigPictureSocial.querySelector ('.social__caption').textContent = description;
    bigPicture.querySelector ('.comments-count').textContent = comments.length;
    const dataComments = data[0].comments;
    rendererBigPictureComments(dataComments, thumbnailElementFragmentComment);
    commentsContainer.innerHTML = '';
    commentsContainer.appendChild(thumbnailElementFragmentComment);
  });
};

export {rendererBigPicture};

