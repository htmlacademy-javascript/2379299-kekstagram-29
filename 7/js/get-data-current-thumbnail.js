// // Функция которая получает данные
// const getDataСurrentThumbnail = (currentThumbnail)=>{
//   const imgThumbnail = currentThumbnail.querySelector('.picture__img').src;
//   const infoThumbnail = currentThumbnail.querySelector('.picture__img').alt;
//   const commentsThumbnail = currentThumbnail.querySelector('.picture__comments').textContent;
//   const likeshumbnail = currentThumbnail.querySelector('.picture__likes').textContent;
//   return {imgThumbnail, infoThumbnail, commentsThumbnail, likeshumbnail };
// };

// export{getDataСurrentThumbnail};


import {allObjects} from './date.js';
console.log(allObjects)

// Функция которая получает данные
const getDataСurrentThumbnail = (id)=>{
  const currentIdThumbnail = allObjects.filter((element) => {
    console.log('----', element.id, parseInt(id));
    return element.id === parseInt(id);

  });
  return currentIdThumbnail;
};


export{getDataСurrentThumbnail};
