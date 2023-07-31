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

const loadingComments = (nodes) => {
  const childNodesArray = Array.from(nodes.childNodes);

  let count = 0;
  childNodesArray.forEach((element) => {
    if (element.classList.contains('hidden')) {
      if(count < 5){
        element.classList.remove('hidden');
        count++;
      }
    }
  });

  const activeCount = childNodesArray.length - nodes.querySelectorAll('.hidden').length;

  if(activeCount === childNodesArray.length){
    document.querySelector('.comments-loader').classList.add('hidden');
  } else {
    document.querySelector('.comments-loader').classList.remove('hidden');
  }
  const commentCountText = `${activeCount} из <span class="comments-count">${childNodesArray.length}</span> комментариев`;
  document.querySelector ('.social__comment-count').innerHTML = commentCountText;
};

export {rendererBigPicture,loadingComments};
