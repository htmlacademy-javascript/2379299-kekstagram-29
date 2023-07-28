const bigPicture = document.querySelector('.big-picture');
const bigPictureSocial = document.querySelector('.big-picture__social');
const commentsContainer = document.querySelector('.social__comments');
const buttonLoadComments = document.querySelector('.comments-loader');


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
    const childNodesArray = Array.from(commentsContainer.childNodes);
    const loadingComments = () => {
      let count = 0;
      childNodesArray.forEach(element => {
        if (element.classList.contains('hidden')) {
          if(count < 5){
            element.classList.remove('hidden');
            count++;
          }
        }

      });
    };
    loadingComments();

    buttonLoadComments.addEventListener('click', loadingComments);
  });
};

export {rendererBigPicture};

