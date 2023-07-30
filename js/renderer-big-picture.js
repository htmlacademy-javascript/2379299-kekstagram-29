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
    comment.classList.add('hidden');
    thumbnailElementFragmentComment.appendChild(comment);
  });
};

const rendererBigPicture = ({url,likes, description, comments}) => {
  const thumbnailElementFragmentComment = document.createDocumentFragment();
  bigPicture.querySelector ('.big-picture__img').children[0].src = url;
  bigPictureSocial.querySelector('.likes-count').textContent = likes;
  bigPictureSocial.querySelector('.social__caption').textContent = description;
  rendererBigPictureComments(comments, thumbnailElementFragmentComment);
  commentsContainer.innerHTML = '';
  commentsContainer.appendChild(thumbnailElementFragmentComment);

  return commentsContainer;
};

const loadingComments = (childNodesArray) => {
  let text = 0;
  let count = 0;
  childNodesArray.forEach((element) => {
    if (element.classList.contains('hidden')) {
      if(count < 5){
        element.classList.remove('hidden');
        count++;
        text++;
      }
    }

    if(text === childNodesArray.length){
      document.querySelector('.comments-loader').classList.add('hidden');
    }
  });

  document.querySelector ('.social__comment-count').textContent = `${text} из ${childNodesArray.length} комментариев`;
};

export {rendererBigPicture,loadingComments};
